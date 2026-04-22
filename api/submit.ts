import type { VercelRequest, VercelResponse } from '@vercel/node'
import { put, list } from '@vercel/blob'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, attending, sleepover, vegan, dietary, message } = req.body

  if (!name || !attending) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const submission = {
    name,
    attending,
    sleepover: sleepover || null,
    vegan: !!vegan,
    dietary: dietary || null,
    message: message || null,
    submittedAt: new Date().toISOString(),
  }

  /* ── Store in Vercel Blob ── */
  try {
    // Read existing submissions
    let submissions: typeof submission[] = []
    try {
      const { blobs } = await list({ prefix: 'submissions/' })
      if (blobs.length > 0) {
        // Get the latest submissions file
        const latest = blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime())[0]
        const resp = await fetch(latest.url)
        submissions = await resp.json()
      }
    } catch {
      // First submission or blob not set up — start fresh
    }

    submissions.push(submission)

    await put('submissions/all.json', JSON.stringify(submissions, null, 2), {
      access: 'public',
      addRandomSuffix: false,
    })
  } catch (err) {
    // Blob storage is optional — don't fail the request if it's not configured
    console.warn('Blob storage failed (may not be configured):', err)
  }

  /* ── Send email via Resend ── */
  const attendingText = attending === 'yes' ? 'Ano, přijdu' : 'Bohužel ne'
  const sleepoverText = sleepover === 'yes' ? 'Ano, přespím' : sleepover === 'no' ? 'Ne, mám odvoz' : '—'
  const veganText = vegan ? 'Ano' : 'Ne'

  const html = `
    <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; color: #4A3728;">
      <h2 style="font-weight: 300; border-bottom: 1px solid #FFCBA4; padding-bottom: 12px;">
        Nová odpověď z dotazníku
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #7A5C48; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Jméno</td>
          <td style="padding: 8px 0; font-size: 16px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #7A5C48; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Účast</td>
          <td style="padding: 8px 0; font-size: 16px;">${attendingText}</td>
        </tr>
        ${attending === 'yes' ? `
        <tr>
          <td style="padding: 8px 0; color: #7A5C48; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Přespání</td>
          <td style="padding: 8px 0; font-size: 16px;">${sleepoverText}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #7A5C48; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Vegan</td>
          <td style="padding: 8px 0; font-size: 16px;">${veganText}</td>
        </tr>
        ${dietary ? `
        <tr>
          <td style="padding: 8px 0; color: #7A5C48; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Alergie</td>
          <td style="padding: 8px 0; font-size: 16px;">${dietary}</td>
        </tr>
        ` : ''}
        ` : ''}
        ${message ? `
        <tr>
          <td style="padding: 8px 0; color: #7A5C48; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Zpráva</td>
          <td style="padding: 8px 0; font-size: 16px;">${message}</td>
        </tr>
        ` : ''}
      </table>
    </div>
  `

  try {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Svatba Bustici <onboarding@resend.dev>',
        to: 'karelbusta@gmail.com',
        cc: 'katerinafosumova@seznam.cz',
        subject: `Svatba — ${name} ${attending === 'yes' ? '✓ přijde' : '✗ nepřijde'}`,
        html,
      }),
    })

    if (!emailRes.ok) {
      const detail = await emailRes.text()
      console.error('Resend error:', detail)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send failed:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}

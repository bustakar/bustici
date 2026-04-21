import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

type Course = {
  label: string
  name: string
  vegan?: string
}

const courses: Course[] = [
  {
    label: 'Aperitiv',
    name: 'Sekt s bezovým sirupem & domácí limonáda',
  },
  {
    label: 'Předkrm',
    name: 'Carpaccio z červené řepy s kozím sýrem, vlašskými ořechy a medovou vinaigrette',
    vegan: 'bez kozího sýra na vyžádání',
  },
  {
    label: 'Polévka',
    name: 'Krémová polévka z pečených dýní s pražnými semínky',
  },
  {
    label: 'Hlavní chod',
    name: 'Pomalu pečená kachna s červeným zelím a karlovarským knedlíkem',
    vegan: 'Pečený celer s gremolátou, bramborovým pyré a houbovou demi-glace',
  },
  {
    label: 'Dezert',
    name: 'Svatební dort: máslový krém, lesní ovoce, bezové květy',
  },
  {
    label: 'Noční raut',
    name: 'Sýrový talíř, šunková rolka, čerstvé pečivo, mini quiche',
  },
]

function CourseItem({ course, delay }: { course: Course; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, delay)
  return (
    <div ref={ref} className="fade-section">
      <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase mb-2">{course.label}</p>
      <p className="font-serif text-xl text-wedding-brown font-light leading-snug">{course.name}</p>
      {course.vegan && (
        <p className="font-body italic text-wedding-lightbrown/75 mt-2" style={{ fontSize: '0.92rem' }}>
          Veganská varianta: {course.vegan}
        </p>
      )}
    </div>
  )
}

export default function Menu() {
  const headingRef = useRef<HTMLDivElement>(null)
  const drinksRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)
  useFadeIn(drinksRef, 200)

  return (
    <section id="menu" className="py-24 md:py-32 canvas-sage relative">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-14">
          <p className="section-label">Co se bude jíst a pít</p>
          <h2 className="section-title font-light">Menu &amp; bar</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto mt-4" style={{ fontSize: '1.05rem' }}>
            Sezónní česká kuchyně s důrazem na lokální suroviny. Veganská varianta na vyžádání u všech chodů.
          </p>
        </div>

        {/* Courses */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-16">
          {courses.map((c, i) => (
            <CourseItem key={c.label} course={c} delay={80 + i * 60} />
          ))}
        </div>

        {/* Drinks / pay policy */}
        <div ref={drinksRef} className="fade-section">
          <div className="border border-wedding-copper/30 bg-wedding-cream/85 p-8 md:p-10">
            <div className="text-center mb-6">
              <p className="font-sans text-[10px] tracking-[0.4em] text-wedding-copper uppercase mb-2">Bar</p>
              <h3 className="font-serif text-2xl text-wedding-brown font-light">Co je v ceně a co si platíte sami</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <p className="font-sans text-[11px] tracking-[0.3em] text-wedding-moss uppercase mb-3">V ceně oslavy</p>
                <ul className="space-y-2 font-body text-wedding-brown" style={{ fontSize: '1rem' }}>
                  <li>· Welcome drink (sekt + nealko)</li>
                  <li>· Víno k večeři (bílé, červené, růžové)</li>
                  <li>· Pivo točené po celý večer</li>
                  <li>· Nealko po celý den (voda, limonády, džusy, káva, čaj)</li>
                </ul>
              </div>
              <div>
                <p className="font-sans text-[11px] tracking-[0.3em] text-wedding-terracotta uppercase mb-3">Z vlastní kapsy</p>
                <ul className="space-y-2 font-body text-wedding-brown" style={{ fontSize: '1rem' }}>
                  <li>· Tvrdý alkohol (whisky, gin, rum)</li>
                  <li>· Koktejly &amp; míchané drinky</li>
                  <li>· Speciální vína mimo nabídku</li>
                </ul>
                <p className="font-body italic text-wedding-lightbrown/70 mt-4" style={{ fontSize: '0.9rem' }}>
                  Bar přijímá hotovost i karty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

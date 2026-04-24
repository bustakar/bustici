import { useCallback, useEffect, useRef, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

type Photo = { src: string; orientation: 'portrait' | 'landscape' }

const photos: Photo[] = [
  { src: '/gallery/IMG_0025.jpg', orientation: 'portrait' },
  { src: '/gallery/IMG_0550.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_0843.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_1700.jpg', orientation: 'portrait' },
  { src: '/gallery/IMG_1883.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_2562.jpg', orientation: 'portrait' },
  { src: '/gallery/IMG_3275.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_3726.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_4137.jpg', orientation: 'portrait' },
  { src: '/gallery/IMG_4358.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_4753.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_5158.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_5247.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_6622.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_7235.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_8075.jpg', orientation: 'landscape' },
  { src: '/gallery/IMG_8608.jpg', orientation: 'portrait' },
  { src: '/gallery/IMG_9154.jpg', orientation: 'landscape' },
]

/* ─── Lightbox with prev / next ─── */

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    if (index === null) return
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [index, onKey])

  if (index === null) return null

  const photo = photos[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Náhled fotografie"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-wedding-darkbrown/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Zavřít"
        className="absolute top-5 right-5 md:top-7 md:right-7 text-wedding-cream/90 hover:text-wedding-cream transition-colors z-10"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
        </svg>
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Předchozí fotka"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-wedding-cream/15 hover:bg-wedding-cream/30 flex items-center justify-center text-wedding-cream transition-colors z-10"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Další fotka"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-wedding-cream/15 hover:bg-wedding-cream/30 flex items-center justify-center text-wedding-cream transition-colors z-10"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Image */}
      <figure
        className="relative max-w-5xl max-h-full flex flex-col items-center px-14 md:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={`Fotka ${index + 1} z ${photos.length}`}
          className="max-w-full max-h-[85vh] object-contain shadow-warm-lg"
        />
        <figcaption className="font-body text-wedding-cream/70 mt-4 text-center" style={{ fontSize: '0.9rem' }}>
          {index + 1} / {photos.length}
        </figcaption>
      </figure>
    </div>
  )
}

/* ─── Photo card ─── */

function PhotoCard({ photo, index, onOpen }: { photo: Photo; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  useFadeIn(ref, index * 50)

  return (
    <div ref={ref} className="fade-section break-inside-avoid">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Otevřít fotku ${index + 1}`}
        className="group w-full overflow-hidden border border-wedding-brown/10 cursor-zoom-in block"
      >
        <img
          src={photo.src}
          alt={`Fotka ${index + 1}`}
          loading="lazy"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ aspectRatio: photo.orientation === 'portrait' ? '3/4' : '4/3' }}
        />
      </button>
    </div>
  )
}

/* ─── Gallery section ─── */

export default function Gallery() {
  const headingRef = useRef<HTMLDivElement>(null)
  useFadeIn(headingRef)

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length))
  }, [])

  return (
    <>
      <section id="galerie" className="py-24 md:py-32 canvas-parchment relative">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={headingRef} className="fade-section text-center mb-14">
            <p className="section-label">Vzpomínky</p>
            <h2 className="section-title font-light">Galerie</h2>
            <LaceDivider className="mt-4" />
            <p className="font-body text-wedding-lightbrown max-w-md mx-auto mt-4" style={{ fontSize: '1.05rem' }}>
              Naše společné chvíle — dobrodružství, místa, večery, cesty.
            </p>
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <PhotoCard
                key={photo.src}
                photo={photo}
                index={i}
                onOpen={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </>
  )
}

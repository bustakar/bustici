import { useRef } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { LaceDivider } from './Ornaments'

type Course = {
  label: string
  name: string
  vegan?: string
}

const lunchCourses: Course[] = [
  {
    label: 'Aperitiv',
    name: 'Sekt s bezovým sirupem & domácí limonáda',
  },
  {
    label: 'Polévka',
    name: 'Krémová polévka z pečených dýní s pražnými semínky',
  },
  {
    label: 'Hlavní chod',
    name: 'Hovězí svíčková s houskovým knedlíkem, brusinkami a šlehačkou',
    vegan: 'Pečený celer s gremolátou, bramborovým pyré a houbovou demi-glace',
  },
  {
    label: 'Dezert',
    name: 'Svatební dort s máslovým krémem, lesním ovocem a bezovými květy',
  },
]

const rautItems: Course[] = [
  {
    label: 'Slaný stůl',
    name: 'Mini burgery, domácí salámy a šunky, zrající sýry, jednohubky a čerstvé pečivo s pomazánkami',
  },
  {
    label: 'Sladký stůl',
    name: 'Svatební cukroví, mini dortíčky, makronky, čerstvé ovoce a drobné sladké laskominy',
  },
]

const barItems: Course[] = [
  {
    label: 'V ceně oslavy',
    name: 'Welcome drink, nealko, pivo a víno',
  },
  {
    label: 'Platíte si sami',
    name: 'Tvrdý alkohol, koktejly a spešl vína',
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
  useFadeIn(headingRef)

  return (
    <section id="menu" className="py-24 md:py-32 canvas-parchment relative">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headingRef} className="fade-section text-center mb-14">
          <p className="section-label">Co se bude jíst a pít</p>
          <h2 className="section-title font-light">Menu &amp; bar</h2>
          <LaceDivider className="mt-4" />
          <p className="font-body text-wedding-lightbrown max-w-md mx-auto mt-4" style={{ fontSize: '1.05rem' }}>
            Klasická česká kuchyně s veganskými variantami u všech chodů.
          </p>
        </div>

        {/* Oběd */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-wedding-brown font-light">Oběd</h3>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-12 bg-wedding-copper/40" />
              <span className="w-1 h-1 rounded-full bg-wedding-copper/60" />
              <div className="h-px w-12 bg-wedding-copper/40" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {lunchCourses.map((c, i) => (
              <CourseItem key={c.label} course={c} delay={80 + i * 60} />
            ))}
          </div>
        </div>

        {/* Odpolední raut */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-wedding-brown font-light">Odpolední raut</h3>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-12 bg-wedding-copper/40" />
              <span className="w-1 h-1 rounded-full bg-wedding-copper/60" />
              <div className="h-px w-12 bg-wedding-copper/40" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {rautItems.map((c, i) => (
              <CourseItem key={c.label} course={c} delay={80 + i * 60} />
            ))}
          </div>
        </div>

        {/* Bar */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl text-wedding-brown font-light">Bar</h3>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="h-px w-12 bg-wedding-copper/40" />
              <span className="w-1 h-1 rounded-full bg-wedding-copper/60" />
              <div className="h-px w-12 bg-wedding-copper/40" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {barItems.map((c, i) => (
              <CourseItem key={c.label} course={c} delay={80 + i * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

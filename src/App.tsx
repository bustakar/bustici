import Hero from './components/Hero'
import Map from './components/Map'
import Itinerar from './components/Itinerar'
import Svedci from './components/Svedci'
import Menu from './components/Menu'
import DressCode from './components/DressCode'
import Gallery from './components/Gallery'
import Gifts from './components/Gifts'
// import Ubytovani from './components/Ubytovani'
import FAQ from './components/FAQ'
import Dotaznik from './components/Dotaznik'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-wedding-cream">
      <main>
        <Hero />
        <Map />
        <Itinerar />
        <Svedci />
        <Menu />
        <DressCode />
        <Gallery />
        <Gifts />
        {/* <Ubytovani /> */}
        <FAQ />
        <Dotaznik />
      </main>
      <Footer />
    </div>
  )
}

import Header from './components/Header'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import EventDetails from './components/EventDetails'
import RSVP from './components/RSVP'
import Registry from './components/Registry'
import Accommodations from './components/Accommodations'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-wedding-cream">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <EventDetails />
        <RSVP />
        <Registry />
        <Accommodations />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

import ProgressBar from './components/ProgressBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import About from './components/About.jsx'
import MissionVision from './components/MissionVision.jsx'
import Services from './components/Services.jsx'
import Rig from './components/Rig.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Clients from './components/Clients.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

function App() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <MissionVision />
        <Services />
        <Rig />
        <WhyChoose />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
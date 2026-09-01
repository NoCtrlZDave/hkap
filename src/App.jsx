import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Purpose from './components/Purpose.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Services from './components/Services.jsx'
import Rig from './components/Rig.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Clients from './components/Clients.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Purpose />
        <About />
        <Team />
        <Services />
        <Rig />
        <WhyChoose />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
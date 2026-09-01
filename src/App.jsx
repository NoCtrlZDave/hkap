import { Routes, Route } from 'react-router-dom'
import ProgressBar from './components/ProgressBar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Rig from './pages/Rig.jsx'
import Leadership from './pages/Leadership.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <ProgressBar />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rig" element={<Rig />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
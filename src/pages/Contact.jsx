import PageHero from '../components/PageHero.jsx'
import Contact from '../components/Contact.jsx'
import { images } from '../components/assets.js'

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact Us"
        title="Let's"
        accent="Talk"
        sub="Rig leasing, recycling services or waste management — our team is ready to discuss your next project."
        image={images.contactBg}
      />
      <Contact />
    </>
  )
}
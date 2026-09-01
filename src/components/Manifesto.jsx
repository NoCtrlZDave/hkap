import { images } from './assets.js'
import Icon from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function Manifesto() {
  return (
    <section className="section section--dark manifesto">
      <div className="container manifesto__grid">
        <Reveal>
          <span className="manifesto__kicker">Our Promise</span>
          <blockquote className="manifesto__quote">
            A client-first partnership built on governance, ethics and{' '}
            <em>sustainable industrial excellence.</em>
          </blockquote>
          <p className="manifesto__lead">
            Guided by strong corporate governance, professional ethics and a
            commitment to client satisfaction, HKAP Limited is supported by an
            experienced management team and technical workforce dedicated to
            delivering safe, reliable and sustainable industrial and energy
            solutions.
          </p>
          <a className="manifesto__link" href="#mission">
            View our mission
            <Icon name="arrow" size={15} />
          </a>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <div className="manifesto__media">
            <img src={images.purpose} alt="HKAP operations" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
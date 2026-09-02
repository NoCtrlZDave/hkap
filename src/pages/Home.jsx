import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Manifesto from '../components/Manifesto.jsx'
import Services from '../components/Services.jsx'
import Clients from '../components/Clients.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Reveal from '../components/Reveal.jsx'
import { Link } from 'react-router-dom'
import Icon from '../components/icons.jsx'
import StatsBand from '../components/StatsBand.jsx'
import { images } from '../components/assets.js'

const MARQUEE_ITEMS = [
  'Oil Rig Leasing',
  'Drilling Operations',
  'Metal Recycling',
  'Waste Management',
  'Marine Salvage',
]

const RIG_POINTS = [
  '20,000 ft depth rating',
  'Rotary drive — vertical & horizontal wells',
  'Quarters for 95 active crew',
  'Certified marine helipad module',
]

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Manifesto />

      <Services itemCount={3} cardTo="/services" />

      <StatsBand
        data={[
          { to: 2002, suffix: '', label: 'Incorporated', group: false },
          { to: 24, suffix: '+', label: 'Years in Business' },
          { to: 464616, suffix: '', label: 'RC Number' },
          { to: 6, suffix: '', label: 'Service Lines' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="rig__grid">
            <Reveal variant="left">
              <div className="rig__media">
                <img src={images.rig} alt="TIKVAH drilling rig" loading="lazy" decoding="async" />
              </div>
            </Reveal>

            <div className="rig__copy">
              <Reveal variant="right">
                <span className="kicker">Flagship Asset</span>
                <h2 className="sec-title">
                  The TIKVAH <span className="serif">Drilling Rig</span>
                </h2>
              </Reveal>
              <Reveal variant="right" delay={120}>
                <p className="rig__desc">
                  TIKVAH — formerly Lonestar 203 / Pride of Africa — is a
                  heavy-duty swamp barge rig built for the riverine, estuarine
                  and shallow-water environments of the Niger Delta, drilling
                  production wells for operators across the region.
                </p>
              </Reveal>
              <Reveal variant="up" delay={200}>
                <ul className="rig__list rig__list--one">
                  {RIG_POINTS.map((s) => (
                    <li className="rig__item" key={s}>
                      <Icon name="check" size={16} />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal variant="up" delay={280}>
                <div className="rig__cta">
                  <Link className="btn btn--brand" to="/rig">
                    Explore the TIKVAH
                    <span className="btn__ic">
                      <Icon name="arrow" size={17} />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose count={3} />

      <Clients />
    </>
  )
}
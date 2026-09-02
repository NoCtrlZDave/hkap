import PageHero from '../components/PageHero.jsx'
import Team from '../components/Team.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/icons.jsx'
import { Link } from 'react-router-dom'
import { images } from '../components/assets.js'

const BENCH = [
  'Civil, electrical and structural engineers',
  'Land surveyors and quantity surveyors',
  'Site personnel and project supervisors',
  'Drilling, welding and marine crew',
]

export default function Leadership() {
  return (
    <>
      <PageHero
        kicker="Our People"
        title="Leadership &"
        accent="Team"
        sub="A multi-disciplinary bench spanning oil and gas, banking and engineering — guiding HKAP with governance, ethics and technical depth."
        image={images.team}
      />

      <Team />

      <section className="section section--tint">
        <div className="container">
          <div className="row-split">
            <Reveal variant="left">
              <div className="row-split__media">
                <img src={images.news} alt="HKAP technical team" loading="lazy" decoding="async" />
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <span className="kicker">Technical Capacity</span>
              <h3 className="row-split__title">
                Experience that <span className="serif">backs every project</span>
              </h3>
              <p>
                Beyond the executive team, HKAP is supported by a broader
                technical bench of engineers and site personnel — several of
                whom have been with the company for more than three years,
                bringing 10–20 years of relevant industry experience each.
              </p>
              <ul className="chip-list">
                {BENCH.map((b) => (
                  <li key={b}>
                    <Icon name="check" size={16} />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="row-split__cta">
                <Link className="btn btn--ink" to="/about">
                  Company Profile
                  <span className="btn__ic">
                    <Icon name="arrow" size={17} />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team__note" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <strong style={{ color: 'var(--ink-900)' }}>Governance &amp; commitment.</strong>{' '}
            Our leadership and technical workforce operate under strong
            corporate governance and professional ethics — delivering safe,
            reliable and sustainable solutions that put client satisfaction
            first.
          </div>
        </div>
      </section>
    </>
  )
}
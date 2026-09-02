import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import StatsBand from '../components/StatsBand.jsx'
import Icon from '../components/icons.jsx'
import { Link } from 'react-router-dom'
import { images } from '../components/assets.js'

const SPECS = [
  { label: 'Rig type', value: 'Heavy-duty swamp barge' },
  { label: 'Depth rating', value: '20,000 feet' },
  { label: 'Drive system', value: 'Rotary' },
  { label: 'Wells', value: 'Vertical & horizontal' },
  { label: 'Drill pipe', value: '5-inch high tensile' },
  { label: 'Mud / fluid pumps', value: '120 units' },
  { label: 'Power plant', value: '4 x 1,250 HP (5,000 HP)' },
  { label: 'Marine deck', value: 'Certified helipad module' },
  { label: 'Accommodation', value: '95 active crew' },
  { label: 'Location', value: 'Sapele, Delta State, Nigeria' },
]

const SUPPORT = [
  {
    title: 'Drilling operations',
    text: 'Rotary-driven drilling of vertical and horizontal wells to a 20,000 ft depth rating.',
  },
  {
    title: 'Well engineering & completion',
    text: 'Wellsite engineering, drilling programme execution and completion support.',
  },
  {
    title: 'Well control & safety',
    text: 'Certified IWCF well control and IADC rig-operations competencies across the crew.',
  },
  {
    title: 'Drilling fluids & logistics',
    text: 'Industrial mud and fluid pumping plus marine and helideck logistics coordination.',
  },
]

const GALLERY = [images.epc, images.rigJobs, images.wellhead, images.downhole, images.drilling, images.composite]

export default function RigPage() {
  return (
    <>
      <PageHero
        kicker="Flagship Asset"
        title="The TIKVAH"
        accent="Drilling Rig"
        sub="A heavy-duty swamp barge drilling rig built for the riverine, estuarine and shallow-water environments of the Niger Delta."
        image={images.rig}
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
                <span className="kicker">Vessel Overview</span>
                <h2 className="sec-title">
                  Purpose-built for the <span className="serif">Niger Delta</span>
                </h2>
              </Reveal>
              <Reveal variant="up" delay={120}>
                <p className="rig__desc">
                  <strong>TIKVAH</strong> — formerly Lonestar 203 / Pride of
                  Africa — was acquired through a transparent, competitive
                  bidding process. It carries a clean, unencumbered title and a
                  proven track record of drilling production wells for major
                  operators across the region. Delivered with the drilling,
                  well-control and technical support required for safe,
                  efficient operations.
                </p>
              </Reveal>
              <Reveal variant="up" delay={200}>
                <div className="rig__cta">
                  <Link className="btn btn--brand" to="/contact">
                    Enquire About TIKVAH
                    <span className="btn__ic">
                      <Icon name="arrow" size={17} />
                    </span>
                  </Link>
                  <Link className="btn btn--ghost--ink" to="/services">
                    Leasing Services
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StatsBand
        data={[
          { to: 20000, suffix: ' ft', label: 'Depth Rating' },
          { to: 95, suffix: '', label: 'Crew Capacity' },
          { to: 5000, suffix: ' HP', label: 'Power Plant' },
          { to: 120, suffix: '', label: 'Mud Pumps' },
        ]}
      />

      <section className="section section--dark">
        <div className="container">
          <div className="sec-head">
            <Reveal>
              <span className="kicker">Technical Specifications</span>
              <h2 className="sec-title">
                Built to <span className="serif">perform</span>
              </h2>
            </Reveal>
          </div>

          <div className="spec__list">
            {SPECS.map((s, i) => (
              <Reveal key={s.label} delay={(i % 2) * 80}>
                <div className="spec__row">
                  <span>{s.label}</span>
                  <b>{s.value}</b>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head">
            <Reveal>
              <span className="kicker">Drilling Support</span>
              <h2 className="sec-title">
                Full-service <span className="serif">support</span>
              </h2>
            </Reveal>
          </div>

          <div className="team__grid">
            {SUPPORT.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 100}>
                <div className="member">
                  <div className="member__head">
                    <span className="member__initials">
                      <Icon name="check" size={30} />
                    </span>
                  </div>
                  <div className="member__body">
                    <h3 className="member__name" style={{ fontSize: '1.05rem' }}>
                      {s.title}
                    </h3>
                    <p className="member__bio">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="sec-head sec-head--center">
            <Reveal>
              <span className="kicker">On Location</span>
              <h2 className="sec-title">
                The rig <span className="serif">in action</span>
              </h2>
            </Reveal>
          </div>

          <div className="gallery">
            {GALLERY.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div className="gallery__item">
                  <img src={g} alt={`TIKVAH operations ${i + 1}`} loading="lazy" decoding="async" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
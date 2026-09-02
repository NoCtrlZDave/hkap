import { Link } from 'react-router-dom'
import { images } from './assets.js'
import Reveal from './Reveal.jsx'
import Icon from './icons.jsx'

const SERVICES = [
  { title: 'Oil Rig Leasing', text: 'Long-term charter of the TIKVAH swamp barge rig with drilling, well-control and technical support.', img: images.drilling, cta: 'Lease the rig' },
  { title: 'Drilling Operations', text: 'Rotary-driven drilling — vertical and horizontal wells — to a 20,000 ft depth rating.', img: images.epc, cta: 'Plan a well' },
  { title: 'Metal Scrap & Recycling', text: 'Collection, processing and smelting of scrap metal under Total Waste Management.', img: images.downhole, cta: 'Recycle with us' },
  { title: 'Waste Handling & Disposal', text: 'End-to-end industrial waste handling that cuts cost and management time.', img: images.nitrogen, cta: 'Manage waste' },
  { title: 'Marine Salvage', text: 'Complex marine salvage drawing on decades of heavy maritime and offshore experience.', img: images.composite, cta: 'Salvage support' },
  { title: 'QHSE & Governance', text: 'Safe, compliant, accountable operations anchored in professional ethics.', img: images.catering, cta: 'Our standards' },
]

export default function Services({ itemCount = SERVICES.length, cardTo = '/services' }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="sec-head sec-head--center">
          <Reveal>
            <span className="kicker">What We Do</span>
            <h2 className="sec-title">
              Services built on <span className="serif">capability</span>
            </h2>
            <p className="sec-sub">
              From the wellsite to the scrapyard — end-to-end industrial
              solutions delivered by one accountable partner.
            </p>
          </Reveal>
        </div>

        <div className="svc__grid">
          {SERVICES.slice(0, itemCount).map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 110}>
              <Link className="svc-card" to={cardTo} aria-label={s.cta}>
                <div className="svc-card__media">
                  <img className="svc-card__img" src={s.img} alt={s.title} loading="lazy" decoding="async" />
                  <div className="svc-card__veil"></div>
                  <span className="svc-card__num">0{i + 1}</span>
                </div>
                <div className="svc-card__body">
                  <h3 className="svc-card__title">
                    {s.title}
                    <span className="svc-card__arrow">
                      <Icon name="arrow" size={17} />
                    </span>
                  </h3>
                  <p className="svc-card__desc">{s.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
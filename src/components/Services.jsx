import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Icon from './icons.jsx'
import { SERVICES } from './servicesData.js'

export default function Services({ itemCount = SERVICES.length, cardTo = '/services', onSelect }) {
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
          {SERVICES.slice(0, itemCount).map((s, i) =>
            onSelect ? (
              <Reveal key={s.title} delay={(i % 3) * 110}>
                <button
                  type="button"
                  className="svc-card svc-card--btn"
                  onClick={() => onSelect(s)}
                  aria-label={`View details — ${s.title}`}
                >
                  <div className="svc-card__media">
                    <img className="svc-card__img" src={s.img} alt={s.title} loading="lazy" decoding="async" />
                    <div className="svc-card__veil"></div>
                    <span className="svc-card__num">0{i + 1}</span>
                  </div>
                  <div className="svc-card__body">
                    <h3 className="svc-card__title">
                      {s.title}
                      <span className="svc-card__arrow">
                        <Icon name="chevR" size={17} />
                      </span>
                    </h3>
                    <p className="svc-card__desc">{s.text}</p>
                  </div>
                </button>
              </Reveal>
            ) : (
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
            ),
          )}
        </div>
      </div>
    </section>
  )
}

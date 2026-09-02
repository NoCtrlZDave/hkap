import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Icon from './icons.jsx'

export default function ServiceDetail({ service, flip = false, onClose }) {
  return (
    <section className="section" id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="container">
        <div className={`svc-detail ${flip ? 'svc-detail--flip' : ''}`}>
          <Reveal variant={flip ? 'right' : 'left'}>
            <div className="svc-detail__media">
              <img src={service.img} alt={service.title} loading="lazy" decoding="async" />
            </div>
          </Reveal>

          <Reveal variant={flip ? 'left' : 'right'} delay={120}>
            <div className="svc-detail__copy">
              <span className="kicker">{service.kicker}</span>
              <h2 className="sec-title">{service.title}</h2>
              <p className="svc-detail__lead">{service.long}</p>

              <ul className="chip-list">
                {service.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={16} />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="svc-detail__cta">
                <Link className="btn btn--brand" to="/contact">
                  Enquire about {service.title}
                  <span className="btn__ic">
                    <Icon name="arrow" size={17} />
                  </span>
                </Link>
                {onClose && (
                  <button type="button" className="btn btn--ghost--ink" onClick={onClose}>
                    Back to all services
                  </button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

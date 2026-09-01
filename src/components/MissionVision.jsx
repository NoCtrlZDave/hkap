import Reveal from './Reveal.jsx'
import Icon from './icons.jsx'

const VALUES = [
  'Honesty, integrity and transparency',
  'Excellent and innovative service delivery',
  'Customer satisfaction first',
  'Highest standard of safety in operations',
  'Professionalism and sustainable practice',
]

export default function MissionVision() {
  return (
    <section id="mission" className="section section--tint">
      <div className="container">
        <div className="sec-head sec-head--center">
          <Reveal>
            <span className="kicker">Purpose &amp; Values</span>
            <h2 className="sec-title">
              Mission &amp; <span className="serif">Vision</span>
            </h2>
          </Reveal>
        </div>

        <div className="mv__grid">
          <Reveal delay={80}>
            <div className="mv__card mv__card--accent">
              <div className="mv__icon">M</div>
              <h3>Our Mission</h3>
              <div className="mv__rule"></div>
              <p>
                To be a leader in the recycling and oil industry in Africa by
                providing the highest quality products, meeting the needs of
                the community today and for future generations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mv__card mv__card--paper">
              <div className="mv__icon">V</div>
              <h3>Our Vision</h3>
              <div className="mv__rule"></div>
              <p>
                To deliver quality products through continuous innovation, on a
                foundation of trust and integrity.
              </p>
              <p style={{ marginTop: '22px', fontWeight: 600, color: 'var(--ink-900)' }}>
                Core Values
              </p>
              <div style={{ marginTop: '12px' }}>
                {VALUES.map((v) => (
                  <p
                    key={v}
                    style={{
                      marginTop: '8px',
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'baseline',
                      color: 'var(--muted)',
                    }}
                  >
                    <Icon name="check" size={15} />
                    {v}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
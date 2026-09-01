import Reveal from './Reveal.jsx'
import Icon from './icons.jsx'

const REASONS = [
  'Over 24 years of proven experience in industrial recycling and metal scrap management.',
  'Ownership of TIKVAH — a technically capable, unencumbered drilling asset with proven operational history.',
  'A multi-disciplinary leadership team spanning oil and gas, banking, finance and engineering.',
  'A client-first philosophy anchored in accountability, professional ethics and sustainable practice.',
  'Established relationships with leading operators including NNPCL, Seplat Energy and Sahara Energy.',
]

export default function WhyChoose() {
  return (
    <section id="why" className="section section--tint">
      <div className="container">
        <div className="why__grid">
          <Reveal variant="left">
            <div className="why__lead">
              <span className="kicker">Why Choose HKAP</span>
              <h2 className="sec-title">
                The partner operators <span className="serif">trust</span>
              </h2>
              <p>
                Every engagement is anchored in accountability, professional
                ethics and sustainable business practice. We bring capability,
                compliance and a long track record — so your operation has one
                dependable partner from start to finish.
              </p>
              <a className="manifesto__link" href="#contact" style={{ color: 'var(--copper-600)', borderColor: 'var(--copper-500)' }}>
                Talk to our team
                <Icon name="arrow" size={15} />
              </a>
            </div>
          </Reveal>

          <div>
            {REASONS.map((r, i) => (
              <Reveal key={r} delay={i * 90}>
                <div className="why__reason">
                  <span className="why__num">0{i + 1}</span>
                  <span className="why__sub">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
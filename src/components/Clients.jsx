import Reveal from './Reveal.jsx'

const OPERATORS = ['NNPCL', 'Seplat Energy', 'Sahara Energy', 'IADC Standards', 'African E&P', 'Delta Basin']
const PARTNERS = ['Drilling Contractors', 'Marine Services', 'Recycling Clients', 'Engineering Bench', 'Logistics Partners']

export default function Clients() {
  return (
    <section id="clients" className="logos">
      <div className="container logos__head">
        <Reveal>
          <span className="kicker">Trusted By</span>
          <h2 className="sec-title">
            Clients &amp; <span className="serif">Partners</span>
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <div className="logos__row">
          <div className="logos__track">
            {[...OPERATORS, ...OPERATORS].map((op, i) => (
              <span className="logo-chip" key={i}>
                {op}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="logos__row logos__row--reverse">
          <div className="logos__track">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span className="logo-chip logo-chip--dim" key={i}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
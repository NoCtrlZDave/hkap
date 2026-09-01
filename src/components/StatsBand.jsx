import Counter from './Counter.jsx'
import Reveal from './Reveal.jsx'

export default function StatsBand({ data }) {
  return (
    <section className="num-band">
      <div className="container num-band__grid">
        {data.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="num">
              <b>
                <Counter to={s.to} suffix={s.suffix} duration={1500 + i * 200} />
              </b>
              <span>{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
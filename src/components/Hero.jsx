import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from './assets.js'
import Icon from './icons.jsx'
import Counter from './Counter.jsx'

const SLIDES = [
  {
    overline: 'Recycling & Energy since 2002',
    lines: ['Recycling.', 'Energy.', 'Progress.'],
    sub: 'HKAP Limited blends 24 years of industrial recycling mastery with upstream oil and gas capability — operating the TIKVAH drilling rig for Nigeria\u2019s leading operators.',
    cta: { label: 'Explore Our Services', to: '/services' },
    ghost: { label: 'Meet TIKVAH', to: '/rig' },
    bg: images.hero1,
  },
  {
    overline: 'Flagship Asset',
    lines: ['The TIKVAH', 'Drilling Rig'],
    sub: 'A heavy-duty swamp barge drilling rig with a 20,000 ft depth rating — rotary-driven for vertical and horizontal wells in the Niger Delta.',
    cta: { label: 'View Rig Specifications', to: '/rig' },
    ghost: null,
    bg: images.hero2,
  },
  {
    overline: 'Upstream Oil & Gas',
    lines: ['Drilling, Reimagined', 'for West Africa'],
    sub: 'Long-term rig charter for E&P operators including NNPCL, Seplat Energy and Sahara Energy, with drilling, well-control and technical support.',
    cta: { label: 'Rig Leasing Services', to: '/services' },
    ghost: null,
    bg: images.hero3,
  },
  {
    overline: 'Total Waste Management',
    lines: ['Scrap to Value,', 'Responsibly'],
    sub: 'One-Stop-Centre covering scrap collection, metal smelting and industrial waste handling — reducing cost and management time for clients.',
    cta: { label: 'Recycling Services', to: '/services' },
    ghost: null,
    bg: images.hero4,
  },
]

const STATS = [
  { to: 24, suffix: '+', label: 'Years in Business' },
  { to: 2002, suffix: '', label: 'Incorporated', group: false },
  { to: 20000, suffix: ' ft', label: 'Rig Depth Rating' },
  { to: 95, suffix: '', label: 'Crew Capacity' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="hero">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.overline}
          className={`hero__slide ${i === index ? 'hero__slide--active' : ''}`}
        >
          <div
            className="hero__media"
            style={{ backgroundImage: `url(${slide.bg})` }}
          ></div>
          <div className="hero__veil"></div>
          <div className="container hero__frame">
            {i === index && (
              <div className="hero__content" key={`s-${i}`}>
                <span className="hero__overline">{slide.overline}</span>
                <h1 className="hero__title">
                  {slide.lines.map((line) => (
                    <span className="hero__line" key={line}>
                      <span>{line}</span>
                    </span>
                  ))}
                </h1>
                <p className="hero__sub">{slide.sub}</p>
                <div className="hero__actions">
                  <Link className="btn btn--brand" to={slide.cta.to}>
                    {slide.cta.label}
                    <span className="btn__ic">
                      <Icon name="arrow" size={17} />
                    </span>
                  </Link>
                  {slide.ghost && (
                    <Link className="btn btn--ghost" to={slide.ghost.to}>
                      {slide.ghost.label}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="hero__cue">Scroll to explore</div>

      <div className="hero__stats">
        {STATS.map((stat, i) => (
          <div className="stat" key={stat.label}>
            <div className="stat__num">
              <Counter to={stat.to} suffix={stat.suffix} duration={1600 + i * 250} group={stat.group !== false} />
            </div>
            <div className="stat__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
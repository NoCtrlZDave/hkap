import { useEffect, useState, useRef } from 'react'
import Reveal from './Reveal.jsx'

const SPOTLIGHT = [
  {
    name: 'NNPCL',
    mark: 'NNPC',
    tag: 'National Petroleum',
    role: 'Rig Charter & Drilling Services',
    blurb:
      "HKAP is trusted to deliver rig charter and drilling services for the Nigerian National Petroleum Company — Nigeria's national petroleum operator.",
  },
  {
    name: 'Seplat Energy',
    mark: 'SE',
    tag: 'Independent E&P',
    role: 'Drilling & Well Services',
    blurb:
      'A leading independent E&P company — HKAP supports hydrocarbon exploration and production operations across the Niger Delta.',
  },
  {
    name: 'Sahara Energy',
    mark: 'SH',
    tag: 'Energy Group',
    role: 'Upstream Operations',
    blurb:
      'An integrated pan-African energy group — HKAP partners on upstream operations across the African energy value chain.',
  },
  {
    name: 'IADC Standards',
    mark: 'IADC',
    tag: 'Industry Benchmark',
    role: 'Drilling Practice',
    blurb:
      'Crew operations are benchmarked against the drilling practices of the International Association of Drilling Contractors.',
  },
  {
    name: 'Lonestar Heritage',
    mark: 'LON',
    tag: 'Rig Heritage',
    role: 'Niger Delta Wells',
    blurb:
      'The TIKVAH — formerly Lonestar 203 — carries a proven heritage of production-well drilling in the Niger Delta.',
  },
  {
    name: 'Pride of Africa',
    mark: 'POA',
    tag: 'Rig Heritage',
    role: 'Regional Track Record',
    blurb:
      'Formerly the Pride of Africa, the TIKVAH\u2019s legacy spans wells drilled for major operators across the region.',
  },
]

const MARQUEE_ONE = [
  { name: 'NNPCL', mark: 'NNPC' },
  { name: 'Seplat Energy', mark: 'SE' },
  { name: 'Sahara Energy', mark: 'SH' },
  { name: 'IADC Standards', mark: 'IADC' },
  { name: 'Lonestar 203', mark: 'LON' },
  { name: 'Pride of Africa', mark: 'POA' },
]

const MARQUEE_TWO = [
  'Drilling Contractors',
  'Marine Services',
  'Recycling Clients',
  'Engineering Bench',
  'Logistics Partners',
]

const SPEED = 4500

export default function Clients() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const hoverRef = useRef(false)
  const manualRef = useRef(false)

  useEffect(() => {
    if (!playing) return undefined
    const t = setInterval(() => {
      if (!hoverRef.current) {
        setActive((a) => (a + 1) % SPOTLIGHT.length)
      }
    }, SPEED)
    return () => clearInterval(t)
  }, [playing])

  const select = (i) => {
    manualRef.current = true
    setActive(i)
    setPlaying(false)
  }

  return (
    <section
      id="clients"
      className="logos"
      onMouseEnter={() => {
        hoverRef.current = true
        setPlaying(false)
      }}
      onMouseLeave={() => {
        hoverRef.current = false
        if (!manualRef.current) setPlaying(true)
      }}
    >
      <div className="container logos__head">
        <Reveal>
          <span className="kicker">Trusted By</span>
          <h2 className="sec-title">
            Clients &amp; <span className="serif">Partners</span>
          </h2>
          <p className="sec-sub">
            A track record built with operators and institutions we are proud to
            serve across Nigeria and West Africa.
          </p>
        </Reveal>
      </div>

      <div className="container">
        <Reveal>
          <div className="spot__card" key={active}>
            <div className="spot__monogram">{SPOTLIGHT[active].mark}</div>
            <div className="spot__meta">
              <span className="spot__index">
                {String(active + 1).padStart(2, '0')}
                <i> / {String(SPOTLIGHT.length).padStart(2, '0')}</i>
              </span>
              <span className="spot__tag">{SPOTLIGHT[active].tag}</span>
            </div>
            <div className="spot__name">
              {SPOTLIGHT[active].name}
            </div>
            <div className="spot__role">{SPOTLIGHT[active].role}</div>
            <p className="spot__blurb">{SPOTLIGHT[active].blurb}</p>
            <div className="spot__tick" aria-hidden="true"></div>
          </div>
        </Reveal>
      </div>

      <div className="spot__marquee" aria-label="Select a client or partner">
        <div className="spot__track">
          {[...SPOTLIGHT, ...SPOTLIGHT].map((c, i) => {
            const idx = i % SPOTLIGHT.length
            return (
              <button
                type="button"
                key={`${c.name}-${i}`}
                className={`spot-btn ${idx === active ? 'spot-btn--active' : ''}`}
                onClick={() => select(idx)}
                onMouseEnter={() => setActive(idx)}
                aria-pressed={idx === active}
              >
                <span className="spot-btn__num">{String(idx + 1).padStart(2, '0')}</span>
                <b className="spot-btn__mark">{c.mark}</b>
                <span>
                  <span className="spot-btn__name">{c.name}</span>
                  <span className="spot-btn__tag">{c.role}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="container logos__marquee">
        <Reveal>
          <div className="logos__row">
            <div className="logos__track">
              {[...MARQUEE_ONE, ...MARQUEE_ONE].map((c, i) => (
                <span
                  className={`logo-chip ${i % 3 === 1 ? 'logo-chip--line' : ''}`}
                  key={`${c.name}-${i}`}
                >
                  <b className="logo-chip__mark">{c.mark}</b>
                  <span>{c.name}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="logos__row logos__row--reverse">
            <div className="logos__track logos__track--slow">
              {[...MARQUEE_TWO, ...MARQUEE_TWO].map((p, i) => (
                <span className="logo-chip logo-chip--dim" key={`${p}-${i}`}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
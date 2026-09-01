import { useEffect, useState } from 'react'
import Icon from './icons.jsx'

const SERVICES = [
  'Oil Rig Leasing',
  'Drilling Operations',
  'Metal Scrap & Recycling',
  'Waste Handling & Disposal',
  'Marine Salvage',
]

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'mission', label: 'Mission' },
  { id: 'services', label: 'Services' },
  { id: 'rig', label: 'The Rig' },
  { id: 'why', label: 'Why Us' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 40)

      let current = 'home'
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top <= 140) {
          current = section.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__group">
            <span className="topbar__item">
              <Icon name="phone" size={14} />
              <a href="tel:+2348170592700">+234 817 059 2700</a>
            </span>
            <span className="topbar__item">
              <Icon name="mail" size={14} />
              <a href="mailto:ray@hkaplimited.com">ray@hkaplimited.com</a>
            </span>
          </div>
          <span className="topbar__tag">RC 464616 &middot; Lagos, Nigeria</span>
        </div>
      </div>

      <header className={`navbar ${solid ? 'navbar--solid' : ''}`}>
        <div className="container navbar__inner">
          <a href="#home" className="brand" onClick={close}>
            <span className="brand__mark">H</span>
            <span>
              <span className="brand__text">
                HKAP <span>LIMITED</span>
              </span>
              <div className="brand__sub">Recycling &amp; Energy</div>
            </span>
          </a>

          <button
            type="button"
            className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav>
            <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
              {SECTIONS.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a
                    className={`nav__link ${active === s.id && !open ? 'nav__link--active' : ''}`}
                    href={`#${s.id}`}
                    onClick={close}
                  >
                    {s.label}
                  </a>
                </li>
              ))}

              <li className="nav__group">
                <a
                  className={`nav__link nav__group-toggle ${active === 'why' || active === 'team' || active === 'clients' ? 'nav__link--active' : ''}`}
                  href="#why"
                  onClick={close}
                >
                  Company
                </a>
                <div className="nav__dropdown">
                  <a href="#why" onClick={close}>
                    Why Choose HKAP
                  </a>
                  <a href="#team" onClick={close}>
                    Leadership Team
                  </a>
                  <a href="#clients" onClick={close}>
                    Clients &amp; Partners
                  </a>
                </div>
              </li>

              <li className="nav__group">
                <a
                  className={`nav__link nav__group-toggle ${active === 'services' || active === 'rig' ? 'nav__link--active' : ''}`}
                  href="#services"
                  onClick={close}
                >
                  What We Do
                </a>
                <div className="nav__dropdown">
                  {SERVICES.map((s) => (
                    <a key={s} href="#services" onClick={close}>
                      {s}
                    </a>
                  ))}
                  <a href="#rig" onClick={close}>
                    The TIKVAH Rig
                  </a>
                </div>
              </li>

              {SECTIONS.slice(7).map((s) => (
                <li key={s.id}>
                  <a
                    className={`nav__link ${active === s.id && !open ? 'nav__link--active' : ''}`}
                    href={`#${s.id}`}
                    onClick={close}
                  >
                    {s.label}
                  </a>
                </li>
              ))}

              <li>
                <a className="nav__link nav__link--cta" href="#contact" onClick={close}>
                  Start a Project
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
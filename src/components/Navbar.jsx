import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { images } from './assets.js'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/rig', label: 'The Rig' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1200) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`navbar ${solid ? 'navbar--solid' : ''}`}>
        <div className="container navbar__inner">
          <NavLink to="/" className="brand" onClick={close}>
            <img className="brand__mark" src={images.logo} alt="HKAP Limited logo" />
            <span>
              <span className="brand__text">
                HKAP <span>LIMITED</span>
              </span>
              <div className="brand__sub">Recycling &amp; Energy</div>
            </span>
          </NavLink>

          <button
            type="button"
            className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close navigation' : 'Toggle navigation'}
            aria-expanded={open}
            aria-controls="site-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav aria-label="Primary">
            <ul id="site-nav" className={`nav__links ${open ? 'nav__links--open' : ''}`}>
              {LINKS.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `nav__link ${isActive && !open ? 'nav__link--active' : ''}`
                    }
                    onClick={close}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}

              <li>
                <NavLink className="nav__link nav__link--cta" to="/contact" onClick={close}>
                  Start a Project
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
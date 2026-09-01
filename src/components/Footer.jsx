import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Icon from './icons.jsx'

const SOCIALS = [
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
]

const COMPANY = [
  { label: 'About HKAP', to: '/about' },
  { label: 'Mission & Vision', to: '/about' },
  { label: 'Leadership Team', to: '/leadership' },
  { label: 'Clients & Partners', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

const SERVICES = [
  { label: 'Oil Rig Leasing', to: '/services' },
  { label: 'Drilling Operations', to: '/services' },
  { label: 'Metal Scrap & Recycling', to: '/services' },
  { label: 'Waste Handling & Disposal', to: '/services' },
  { label: 'Marine Salvage', to: '/services' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <Reveal>
            <h3>
              Build your next phase <span className="serif">with HKAP.</span>
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <Link className="btn btn--brand" to="/contact">
              Start a Project
              <span className="btn__ic">
                <Icon name="arrow" size={17} />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <Link to="/" className="brand">
              <span className="brand__mark">H</span>
              <span>
                <span className="brand__text">
                  HKAP <span>LIMITED</span>
                </span>
                <div className="brand__sub">Recycling &amp; Energy</div>
              </span>
            </Link>
            <p className="footer__blurb">
              A Nigerian integrated industrial company delivering recycling,
              waste management and upstream oil and gas services since 2002.
            </p>
            <div className="footer__social">
              {SOCIALS.map((s) => (
                <a href={s.href} key={s.name} aria-label={s.name}>
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
            <span className="footer__rc">RC 464616 &middot; Incorporated 2002</span>
          </div>

          <div className="footer__col">
            <div className="footer__title">Company</div>
            <ul className="footer__list">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__title">Services</div>
            <ul className="footer__list">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link to={s.to}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__title">Contact</div>
            <ul className="footer__list">
              <li>
                <p>9A Adeyera Adeyemo Street, Ogudu GRA, Lagos State, Nigeria</p>
              </li>
              <li>
                <a href="tel:+2348170592700">+234 817 059 2700</a>
              </li>
              <li>
                <a href="mailto:ray@hkaplimited.com">ray@hkaplimited.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>&copy; {new Date().getFullYear()} HKAP Limited. All rights reserved.</span>
          <span>TIKVAH &mdash; formerly Lonestar 203 / Pride of Africa.</span>
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        HKAP
      </div>
    </footer>
  )
}
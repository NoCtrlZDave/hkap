import Reveal from './Reveal.jsx'
import Icon from './icons.jsx'

const SOCIALS = [
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
]

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'Services', href: '#services' },
  { label: 'The TIKVAH Rig', href: '#rig' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Leadership Team', href: '#team' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="cta-band">
        <div className="container cta-band__inner">
          <Reveal>
            <h3 className="cta-band__title">
              Build your next phase <span className="serif">with HKAP.</span>
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <a className="btn btn--brand" href="#contact">
              Start a Project
              <span className="btn__ic">
                <Icon name="arrow" size={17} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="brand brand--footer">
            <span className="brand__mark">H</span>
            <span>
              <span className="brand__text">
                HKAP <span>LIMITED</span>
              </span>
              <div className="brand__sub">Recycling &amp; Energy</div>
            </span>
          </a>
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
        </div>

        <div className="footer__col">
          <div className="footer__label">Company</div>
          <ul>
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <div className="footer__label">Services</div>
          <ul>
            <li><a href="#services">Oil Rig Leasing</a></li>
            <li><a href="#services">Drilling Operations</a></li>
            <li><a href="#services">Metal Scrap &amp; Recycling</a></li>
            <li><a href="#services">Waste Handling &amp; Disposal</a></li>
            <li><a href="#services">Marine Salvage</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <div className="footer__label">Contact</div>
          <ul>
            <li>9A Adeyera Adeyemo Street, Ogudu GRA, Lagos, Nigeria</li>
            <li><a href="tel:+2348170592700">+234 817 059 2700</a></li>
            <li><a href="mailto:ray@hkaplimited.com">ray@hkaplimited.com</a></li>
            <li>RC 464616 &middot; Est. 2002</li>
          </ul>
        </div>
      </div>

      <div className="footer__rc">
        <div className="container footer__rc-inner">
          <span>&copy; {new Date().getFullYear()} HKAP Limited. All rights reserved.</span>
          <span>TIKVAH — formerly Lonestar 203 / Pride of Africa.</span>
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        HKAP
      </div>
    </footer>
  )
}
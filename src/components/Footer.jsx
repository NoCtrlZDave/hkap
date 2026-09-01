import Icon from './icons.jsx'

const QUICK = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'The TIKVAH Rig', href: '#rig' },
  { label: 'Contact Us', href: '#contact' },
]

const SERVICES = [
  'Oil Rig Leasing',
  'Drilling Operations',
  'Metal Scrap & Recycling',
  'Waste Handling & Disposal',
  'Marine Salvage',
]

const SOCIAL = [
  { name: 'linkedin', href: 'https://www.linkedin.com' },
  { name: 'facebook', href: 'https://www.facebook.com' },
  { name: 'instagram', href: 'https://www.instagram.com' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">
            HKAP <span>Limited</span>
          </div>
          <p className="footer__about">
            A Nigerian industrial company with 24+ years in recycling and metal
            scrap management, now powering upstream oil and gas through the
            TIKVAH drilling rig. Industrial recycling. Energy solutions. Total
            waste management.
          </p>
        </div>

        <div>
          <div className="footer__title">Quick Links</div>
          <ul className="footer__list">
            {QUICK.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer__title">Services</div>
          <ul className="footer__list">
            {SERVICES.map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer__title">Head Office</div>
          <ul className="footer__list">
            <li>
              <p>
                9A Adeyera Adeyemo Street, Ogudu GRA, Lagos State, Nigeria
                <br />
                <a href="tel:+2348170592700">+234 817 059 2700</a>
                <br />
                <a href="mailto:ray@hkaplimited.com">ray@hkaplimited.com</a>
              </p>
            </li>
          </ul>
          <div className="footer__social">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
              >
                <Icon name={s.name} size={18} />
              </a>
            ))}
          </div>
          <div className="footer__rc">RC Number: 464616</div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          &copy; {new Date().getFullYear()} HKAP Limited. All rights reserved.
        </span>
        <span>Incorporated 2002 &middot; Lagos, Nigeria</span>
      </div>
    </footer>
  )
}
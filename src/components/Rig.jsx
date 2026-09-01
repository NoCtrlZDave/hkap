import { images } from './assets.js'
import Reveal from './Reveal.jsx'
import Icon from './icons.jsx'

const SPECS = [
  'Rotary-driven, vertical & horizontal wells',
  'Depth rating — 20,000 feet',
  '5-inch high-tensile drill pipe',
  '120 industrial mud / fluid pumps',
  '4 x 1,250 HP power plant (5,000 HP)',
  'Certified marine helipad module',
  'Quarters for 95 active crew',
  'Sapele, Delta State, Nigeria',
]

export default function Rig() {
  return (
    <section id="rig" className="section section--dark">
      <div className="container">
        <div className="rig__grid">
          <Reveal variant="left">
            <div className="rig__media">
              <img src={images.rig} alt="TIKVAH drilling rig" />
            </div>
          </Reveal>

          <div className="rig__copy">
            <Reveal variant="right">
              <span className="kicker">Flagship Asset</span>
              <h2 className="sec-title">
                The TIKVAH <span className="serif">Drilling Rig</span>
              </h2>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <p className="rig__desc">
                <strong>TIKVAH</strong> — formerly Lonestar 203 / Pride of
                Africa — is a heavy-duty swamp barge drilling rig built for the
                riverine, estuarine and shallow-water environments of the Niger
                Delta. Delivered through a transparent, competitive bidding
                process, it carries a clean, unencumbered title and a proven
                track record of drilling production wells for major operators
                across the region.
              </p>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <ul className="rig__list">
                {SPECS.map((s) => (
                  <li className="rig__item" key={s}>
                    <Icon name="check" size={16} />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="up" delay={280}>
              <div className="rig__cta">
                <a className="btn btn--brand" href="#contact">
                  Enquire About TIKVAH
                  <span className="btn__ic">
                    <Icon name="arrow" size={17} />
                  </span>
                </a>
                <a className="btn btn--ghost" href="#services">
                  Leasing Services
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
import { images } from './assets.js'
import Icon from './icons.jsx'

export default function Purpose() {
  return (
    <section className="purpose">
      <div className="container purpose__grid">
        <div>
          <h4 className="purpose__eyebrow">
            Quality
            <span>&amp; Excellence</span>
          </h4>
          <h3 className="purpose__statement">
            Guided by strong corporate governance, professional ethics and a
            commitment to client satisfaction, HKAP Limited delivers safe,
            reliable and sustainable industrial and energy solutions.
          </h3>
          <a className="purpose__link" href="#about">
            VIEW ABOUT US
            <Icon name="arrow" size={16} />
          </a>
        </div>
        <div className="purpose__image">
          <img src={images.purpose} alt="HKAP operations" />
        </div>
      </div>
    </section>
  )
}
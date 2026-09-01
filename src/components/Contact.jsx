import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Icon from './icons.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section section--tint">
      <div className="container">
        <div className="sec-head sec-head--center">
          <Reveal>
            <span className="kicker">Get In Touch</span>
            <h2 className="sec-title">
              Start a <span className="serif">conversation</span>
            </h2>
          </Reveal>
        </div>

        <div className="contact__grid">
          <Reveal variant="left">
            <div className="contact__panel">
              <h3>Reach HKAP Limited</h3>
              <p>
                Rig leasing, recycling services or waste management — our team
                is ready to discuss your next project.
              </p>

              <div className="contact-item">
                <span className="contact-item__ic">
                  <Icon name="pin" size={20} />
                </span>
                <div>
                  <div className="contact-item__label">Registered Office</div>
                  <div className="contact-item__value">
                    9A Adeyera Adeyemo Street, Ogudu GRA, Lagos State, Nigeria
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__ic">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <div className="contact-item__label">Phone</div>
                  <div className="contact-item__value">
                    <a href="tel:+2348170592700">+234 817 059 2700</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__ic">
                  <Icon name="mail" size={20} />
                </span>
                <div>
                  <div className="contact-item__label">Email</div>
                  <div className="contact-item__value">
                    <a href="mailto:ray@hkaplimited.com">ray@hkaplimited.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-item__ic">
                  <Icon name="hash" size={20} />
                </span>
                <div>
                  <div className="contact-item__label">RC Number</div>
                  <div className="contact-item__value">464616</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="contact__form">
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <span
                    style={{
                      display: 'inline-grid',
                      placeItems: 'center',
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'var(--grad-brand)',
                      color: '#fff',
                    }}
                  >
                    <Icon name="check" size={30} />
                  </span>
                  <h4 style={{ marginTop: '22px' }}>Message received</h4>
                  <p>Thank you — our team will respond within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h4>Send us a message</h4>
                  <p>Tell us about your project and we will get right back to you.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-field">
                      <input name="name" type="text" required placeholder="Full name" />
                    </div>
                    <div className="form-field">
                      <input name="email" type="email" required placeholder="Email address" />
                    </div>
                    <div className="form-field">
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subject — rig leasing, recycling, waste management..."
                      />
                    </div>
                    <div className="form-field">
                      <textarea name="message" required placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit" className="btn btn--brand" style={{ width: '100%', justifyContent: 'center' }}>
                      Send Message
                      <span className="btn__ic">
                        <Icon name="arrow" size={17} />
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
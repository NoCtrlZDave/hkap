import Reveal from './Reveal.jsx'

const LEADERS = [
  {
    name: 'Raymon Ahazie',
    role: 'Chairman / CEO',
    bio: 'Progressive, results-driven leader with 38+ years across management and operations. Founder of HKAP and several industrial enterprises.',
  },
  {
    name: 'Samuel Ejimogu',
    role: 'Chief Operations Mgr',
    bio: 'MBA, Fellow of CIBN, Certified Management Consultant (ICMCI). Over 35 years of C-suite experience across banking, finance and advisory.',
  },
  {
    name: 'Charles Obire',
    role: 'Head Drilling Engineer',
    bio: 'Aberdeen Drilling School-trained, certified in IADC rig operations, IWCF well control and offshore safety across leading contractors.',
  },
  {
    name: 'Ekhakporo Samson',
    role: 'Rig Welder',
    bio: 'Rig welding engineer with wide-ranging underwater and land welding expertise, certified in confined space and offshore survival.',
  },
]

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
}

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="sec-head sec-head--center">
          <Reveal>
            <span className="kicker">Our People</span>
            <h2 className="sec-title">
              Leadership with <span className="serif">depth</span>
            </h2>
            <p className="sec-sub">
              A multi-disciplinary bench spanning oil and gas, banking, finance
              and engineering.
            </p>
          </Reveal>
        </div>

        <div className="team__grid">
          {LEADERS.map((l, i) => (
            <Reveal key={l.name} delay={(i % 4) * 100}>
              <div className="member">
                <div className="member__head">
                  <span className="member__initials">{initials(l.name)}</span>
                </div>
                <div className="member__body">
                  <div className="member__role">{l.role}</div>
                  <h3 className="member__name">{l.name}</h3>
                  <p className="member__bio">{l.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="team__note">
            HKAP&apos;s leadership is further supported by a broader technical
            bench of civil, electrical and structural engineers, land
            surveyors, quantity surveyors and site personnel — several of whom
            have been with the company for over three years, bringing 10–20
            years of relevant industry experience each.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
import React from 'react'
import Profile from '../images/Profile.png'

export default function About() {
  return <>
    <section id="about">

      <h2 className="aboutHeader is-size-1 mt-3">About Me</h2>

      <div className="aboutBody">

        <div className="aboutTextContainer">
          <p  className="aboutText">As a developer with a background as a Cyber Security Account Manager, I have a keen interest in how technology is shaping the way we live and work. Coding was initially a hobby but the fulfilment and joy I gained from problem-solving and seeing the output of my work inspired me to study at General Assembly.
          </p>
          <p>When I'm not coding, you can usually find me exploring new parts of London, in the gym, playing hockey and tennis or travelling abroad.</p>
          <p  className="aboutText">I am currently working at Zaizi as a Junior Full Stack Developer.</p>
        </div>

        <div className="aboutImageContainer">
          <img src={Profile} alt="Hannah smiling" className="aboutImg" />
        </div>

      </div>

    </section>
  </>
}
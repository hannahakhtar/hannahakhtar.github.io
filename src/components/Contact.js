import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'


export default function Contact() {

  return <>
    <div id="contact">

      <section>
        <h2>Contact Me</h2>
        <div className="contactIcons">
          <a href="mailto:hannahaakhtar@gmail.com">
            <AiOutlineMail className="contactIcon icon" alt="Link to email Hannah" />
          </a>
          <a href="https://www.linkedin.com/in/hannahakhtar/" target="_blank" rel="noreferrer">
            <i className="contactIcon devicon-linkedin-plain colored icon" alt="Link to Hannah\'s LinkedIn"></i>
          </a>
          <a href="https://github.com/hannahakhtar" target="_blank" rel="noreferrer">
            <i className=" contactIcon devicon-github-original colored icon" alt="Link to Hannah\'s GitHub"></i>
          </a>

        </div>
      </section>

      <footer>
        <small>Created by: Hannah Akhtar 2021</small>
      </footer>

    </div>
  </>
}
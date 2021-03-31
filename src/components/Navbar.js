import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return <nav>
    <div className="navbar">
      <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" />
      <div className={isOpen ? 'burger' : 'hide'}>
        <a className="navItem" href="/hannahakhtar.github.io">Home</a>
        <a className="navItem" href="/hannahakhtar.github.io/about">About</a>
        <a className="navItem" href="/hannahakhtar.github.io/portfolio">Portfolio</a>
        <a className="navItem" href="/hannahakhtar.github.io/skills">Skills</a>
        <a className="navItem" href="/hannahakhtar.github.io/contact">Contact</a>
      </div>
    </div>
  </nav>

}
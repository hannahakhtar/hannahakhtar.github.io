import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return <nav>
    <div className="navbar">
      <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" />
      <div className={isOpen ? 'burger' : 'hide'}>
        <a className="navItem anchor" href="#home">Home</a>
        <a className="navItem" href="#about">About</a>
        <a className="navItem" href="#skills">Skills</a>
        <a className="navItem" href="#portfolio">Portfolio</a>
        <a className="navItem" href="#contact">Contact</a>
      </div>
    </div>
  </nav>
}
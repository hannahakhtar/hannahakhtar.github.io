import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  function toggleHamburger() {
    setOpen(false)
  }

  return <nav>
    <div className="navbar">
      <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" />
      <div className={isOpen ? 'burger' : 'hide'}>
        <a className="navItem anchor" href="#home" onClick={toggleHamburger}>Home</a>
        <a className="navItem" href="#about" onClick={toggleHamburger}>About</a>
        <a className="navItem" href="#skills" onClick={toggleHamburger}>Skills</a>
        <a className="navItem" href="#portfolio" onClick={toggleHamburger}>Portfolio</a>
        <a className="navItem" href="#contact" onClick={toggleHamburger}>Contact</a>
      </div>
    </div>
  </nav>
}
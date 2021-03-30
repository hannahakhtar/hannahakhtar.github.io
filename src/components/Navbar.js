import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <navbar className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <button className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <button className="navbar-item is-primary">
          <Link to={'/hannahakhtar.github.io'}>Home</Link>
        </button>
      </div>
      <div className="navbar-end">
        <button className="navbar-item is-primary">
          <Link to={'/hannahakhtar.github.io/about'}>About</Link>
        </button>
        <button className="navbar-item is-primary">
          <Link to={'/hannahakhtar.github.io/portfolio'}>Portfolio</Link>
        </button>
        <button className="navbar-item is-primary">
          <Link to={'/hannahakhtar.github.io/experience'}>Experience</Link>
        </button>
        <button className="navbar-item is-primary">
          <Link to={'/hannahakhtar.github.io/contact'}>Contact</Link>
        </button>
      </div>
    </div>
  </navbar>
}
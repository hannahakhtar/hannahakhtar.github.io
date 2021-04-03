import React from 'react'

import './App.scss'

import Home from '../src/components/Home'
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'
import Portfolio from '../src/components/Portfolio'
import Skills from '../src/components/Skills'
import Contact from '../src/components/Contact'

export default function App() {
  return <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </>
}

// * TO DO:
// * 3. general mobile styling

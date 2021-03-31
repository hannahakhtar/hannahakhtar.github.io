import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss';
// import 'bulma'

import Home from '../src/components/Home'
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'
import Portfolio from '../src/components/Portfolio'
import Skills from '../src/components/Skills'
import Contact from '../src/components/Contact'

function App() {
  return <BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact path="/hannahakhtar.github.io" component={Home} />
    <Route exact path="/hannahakhtar.github.io/about" component={About} />
    <Route exact path="/hannahakhtar.github.io/contact" component={Contact} />
    <Route exact path="/hannahakhtar.github.io/portfolio" component={Portfolio} />
    <Route exact path="/hannahakhtar.github.io/skills" component={Skills} />
  </Switch>
  </BrowserRouter>
}

export default App

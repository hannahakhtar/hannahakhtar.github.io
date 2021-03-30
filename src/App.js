import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss';
import 'bulma/css/bulma.css'
import 'bulma'

import Home from '../src/components/Home'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Experience from '../src/components/Experience'
import Navbar from '../src/components/Navbar'
import Portfolio from '../src/components/Portfolio'
import Technologies from '../src/components/Technologies'

function App() {
  return <BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact path="/hannahakhtar.github.io" component={Home} />
    <Route exact path="/hannahakhtar.github.io/about" component={About} />
    <Route exact path="/hannahakhtar.github.io/contact" component={Contact} />
    <Route exact path="/hannahakhtar.github.io/experience" component={Experience} />
    <Route exact path="/hannahakhtar.github.io/portfolio" component={Portfolio} />
    <Route exact path="/hannahakhtar.github.io/technologies" component={Technologies} />
  </Switch>
  </BrowserRouter>
}

export default App;

import siOne from '../images/SpaceInvaders/siOne.png'
import siTwo from '../images/SpaceInvaders/siTwo.png'
import siThree from '../images/SpaceInvaders/siThree.png'

import inspOne from '../images/InsBARation/inspOne.png'
import inspTwo from '../images/InsBARation/inspTwo.png'
import inspThree from '../images/InsBARation/inspThree.png'

import dériveOne from '../images/Dérive/dériveOne.png'
import dériveTwo from '../images/Dérive/dériveTwo.png'
import dériveThree from '../images/Dérive/dériveThree.png'

import garmsOne from '../images/Garms/garmsOne.png'
import garmsTwo from '../images/Garms/garmsTwo.png'
import garmsThree from '../images/Garms/garmsThree.png'

const projects = [
  {
    name: 'Garms',
    shortDescription: 'Group Project | 1 week',
    longDescription: 'Project 4: Garms is a full stack e-commerce app, built using Python, Flask, PostgreSQL and React. I took ownership of front end functionality and styling, the results page and the single item feature, with joint ownership of the back end.',
    github: 'https://github.com/hannahakhtar/project-4',
    live: 'https://garms-shopping.herokuapp.com/',
    imgOne: garmsOne,
    imgTwo: garmsTwo,
    imgThree: garmsThree
  },
  {
    name: 'Dérive',
    shortDescription: 'Group Project | 1 week',
    longDescription: 'Project 3: Dérive is a full stack travel app, built using MongoDB, Express, Node.js and React in one week. I took ownership of registration, searching and filtering countries, friend search and shared ownership of back end with my (two) peers.',
    github: 'https://github.com/hannahakhtar/project-3',
    live: 'https://deriveapp.herokuapp.com/',
    imgOne: dériveOne,
    imgTwo: dériveTwo,
    imgThree: dériveThree
  },
  {
    name: 'InsBARation',
    shortDescription: 'Paired Project | 2 days',
    longDescription: 'Project 2: InsBARation is a front end app that consumes a public API, and built using HTML, CSS and React. This was a hackathon project in a pair, taking place over two days.',
    github: 'https://github.com/hannahakhtar/project-2',
    live: 'https://hannahakhtar.github.io/project-2/',
    imgOne: inspOne,
    imgTwo: inspTwo,
    imgThree: inspThree
  },
  {
    name: 'Space Invaders',
    shortDescription: 'Solo Project | 1 week',
    longDescription: 'Project 1: A recreation of the arcade game, Space Invaders. Built using HTML, CSS and Vanilla JavaScript over the course of a week.',
    github: 'https://github.com/hannahakhtar/project-1',
    live: 'https://hannahakhtar.github.io/project-1/',
    imgOne: siOne,
    imgTwo: siTwo,
    imgThree: siThree
  }
]

export default projects
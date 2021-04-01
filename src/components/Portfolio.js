import React from 'react'

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

export default function Portfolio() {

  const projects = [
    {
      name: 'Garms',
      shortDescription: 'Group Project | 1 week',
      longDescription: 'Project 4: Garms is a full stack e-commerce app, built using Python, Flask, PostgreSQL and React.',
      github: 'https://github.com/hannahakhtar/project-4',
      live: 'https://garms-shopping.herokuapp.com/',
      imgOne: garmsOne,
      imgTwo: garmsTwo,
      imgThree: garmsThree
    },
    {
      name: 'Dérive',
      shortDescription: 'Group Project | 1 week',
      longDescription: 'Project 3: Dérive is a full stack travel app, built using MongoDB, Express, Node.js and React.',
      github: 'https://github.com/hannahakhtar/project-3',
      live: 'https://deriveapp.herokuapp.com/',
      imgOne: dériveOne,
      imgTwo: dériveTwo,
      imgThree: dériveThree
    },
    {
      name: 'InsBARation',
      shortDescription: 'Paired Project | 2 days',
      longDescription: 'Project 2: InsBARation is a front end app that consumes a public API, and built using HTML, CSS and React.',
      github: 'https://github.com/hannahakhtar/project-2',
      live: 'https://hannahakhtar.github.io/project-2/',
      imgOne: inspOne,
      imgTwo: inspTwo,
      imgThree: inspThree
    },
    {
      name: 'Space Invaders',
      shortDescription: 'Solo Project | 1 week',
      longDescription: 'Project 1: A recreation of the arcade game, Space Invaders. Built using HTML, CSS and Vanilla JavaScript.',
      github: 'https://github.com/hannahakhtar/project-1',
      live: 'https://hannahakhtar.github.io/project-1/',
      imgOne: siOne,
      imgTwo: siTwo,
      imgThree: siThree
    }
  ]

  return <>
    <section id="portfolio">
      <h2>Portfolio</h2>
        <div className="portfolioHolder">
          {projects.map((project, index) => {
            return <>
              <h4>{project.name}</h4>
              <p>{project.shortDescription}</p>
              <p>{project.longDescription}</p>
            </>
          })}
      </div>

    </section>
  </>
}
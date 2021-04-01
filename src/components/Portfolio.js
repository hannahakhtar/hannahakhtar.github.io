import React from 'react'

import projects from './Projects'

export default function Portfolio() {

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
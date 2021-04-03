import React from 'react'
import Slider from 'react-slick'
import { FiLink } from 'react-icons/fi'

import projects from './Projects'


export default function Portfolio() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true
  }

  return <>
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolioHolder">
        <Slider {...settings}>
          {projects.map((project, index) => {
            return <div key={index}>
              <div className="portfolioText">
                <h4 className="portfolioHeader">{project.name}</h4>
                <p className="portfolioPara">{project.shortDescription}</p>
                <p className="portfolioPara">{project.longDescription}</p>
              </div>
              <div className="portfolioLinks">
                <a className="portfolioLink" href={project.github} target="_blank" rel="noreferrer">
                  <i className="devicon-github-original"></i>
                  <div className="portfolioLinkDiv">GitHub</div>
                </a>
                <a className="portfolioLink" href={project.live} target="_blank" rel="noreferrer">
                  <FiLink />
                  <div className="portfolioLinkDiv">Live!</div>
                </a>
              </div>
              <div className="portfolioImages">
                <div className="portfolioImageContainer">
                  <img className="portfolioImage" src={project.imgOne} alt='one' />
                </div>
                <div className="portfolioImageContainer">
                  <img className="portfolioImage" src={project.imgTwo} alt='two' />
                </div>
                <div className="portfolioImageContainer">
                  <img className="portfolioImage" src={project.imgThree} alt='three' />
                </div>
              </div>
            </div>
          })}
        </Slider>
      </div>

    </section>
  </>
}
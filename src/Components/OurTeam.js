import React from 'react'

import Worker from './OurTeamComponents/Worker'

import '../styles/OurTeam.css'

import TriangleYellow from '../assets/triangle-asset-yellow.svg'
import TriangleBlue from '../assets/triangle-asset-line-blue.svg'

function OurTeam() {

    const [ scrollValue, setScrollValue ] = React.useState(0);

    const workers = [
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            twitter: 'https://twitter.com/',
            ig: 'https://www.instagram.com/',
            in: 'https://www.linkedin.com/'
        },
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            twitter: 'https://twitter.com/',
            ig: 'https://www.instagram.com/',
            in: 'https://www.linkedin.com/'
        },
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            twitter: 'https://twitter.com/',
            ig: 'https://www.instagram.com/',
            in: 'https://www.linkedin.com/'
        },
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            twitter: 'https://twitter.com/',
            ig: 'https://www.instagram.com/',
            in: 'https://www.linkedin.com/'
        },
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            twitter: 'https://twitter.com/',
            ig: 'https://www.instagram.com/',
            in: 'https://www.linkedin.com/'
        },
        {
            name: 'John Doe',
            position: 'CEO',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            twitter: 'https://twitter.com/',
            ig: 'https://www.instagram.com/',
            in: 'https://www.linkedin.com/'
        }
    ];


    return (
      <div className="our-team">
        <div className="section-header our-team-header">Our Team</div>
        <h2 className="our-team-sub-header">They Make It All Happen!</h2>
        <img src={TriangleBlue} alt="" className="triangle-blue" />
        <img src={TriangleYellow} alt="" className="triangle-yellow" />

        <div className="our-team-container">
          <div
            className="slide-container"
            style={{ transform: `translateX(${scrollValue}%)` }}
          >
            {workers.map((worker, index) => (
              <Worker key={index} worker={worker} />
            ))}
          </div>
          <div className="controls">
            <div
              className="left-arrow-container"
              onClick={() =>
                setScrollValue(
                  window.innerWidth > 768
                    ? scrollValue + 33.5
                    : scrollValue + 33.5 / 2
                )
              }
            >
              <i className="ri-arrow-left-line"></i>
            </div>
            <div
              className="right-arrow-container"
              onClick={() =>
                setScrollValue(
                  window.innerWidth > 768
                    ? scrollValue - 33.5
                    : scrollValue - 33.5 / 2
                )
              }
            >
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OurTeam

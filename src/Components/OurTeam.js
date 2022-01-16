import React from 'react'

import Worker from './OurTeamComponents/Worker'

import '../styles/OurTeam.css'

import TriangleYellow from '../assets/triangle-asset-yellow.svg'
import TriangleBlue from '../assets/triangle-asset-line-blue.svg'

function OurTeam() {

    const [ scrollValue, setScrollValue ] = React.useState(0);

    const workers = [
      {
        name: "Faluyi Jeremiah",
        position: "CEO & Software Engineer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
      {
        name: "Owoade Anuoluwapo",
        position: "CTO & Senior Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
      {
        name: "Olaoye Seyi",
        position: "Web Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
      {
        name: "Oladapo Miracle",
        position: "Lead Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
      {
        name: "Adeoye Prince",
        position: "Frontend Developer & UI/UX Designer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
      {
        name: "Araoye Timothy",
        position: "SEO Expert & Web Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
      {
        name: "Tinuosho Huzain",
        position: "Fullstack Developer & Social Media Manager",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
      {
        name: "Osho Adewunmi",
        position: "PR & Social Media Manager",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
      {
        name: "Adebayo Enoch",
        position: "Frontend Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
      {
        name: "Akintayo Lanre",
        position: "Mobile & Blockchain Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        in: "https://www.linkedin.com/",
      },
    ];


    return (
      <div className="our-team" id="team">
        <div className="section-header our-team-header">Our Team</div>
        <h2 className="our-team-sub-header">They Make It All Happen!</h2>
        <img src={TriangleBlue} alt="" className="triangle-blue" />
        <img src={TriangleYellow} alt="" className="triangle-yellow" />

        <div className="our-team-container">
          <div
            className="slide-container"
            style={{ transform: `translateX(${scrollValue}vw)` }}
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
                    ? scrollValue + 80
                    : scrollValue + 94
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
                    ? scrollValue - 80
                    : scrollValue - 94
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

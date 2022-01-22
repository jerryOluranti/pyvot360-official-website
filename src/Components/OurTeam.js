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
        position: "CEO",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/_oluranti",
        in: "https://www.linkedin.com/in/jeremiah-faluyi-009b85206",
      },
      {
        name: "Owoade Anuoluwapo",
        position: "CTO",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/_favourolaoye",
      },
      {
        name: "Osho Adewunmi",
        position: "PR & Social Media Manager",
        image:
          "https://drive.google.com/uc?export=download&id=19XkfkuZpEfA2Mafx__fk_Pp4-wuzvP4q",
        twitter: "https://twitter.com/OshoAdewunmi",
        ig: "https://www.instagram.com/Call_me_wunmi",
      },
      {
        name: "Olaoye Seyi",
        position: "Web Developer",
        image:
          "https://drive.google.com/uc?export=download&id=1ApBPwKy7q-p0IWLDFmDsIM10zVw26OxV",
        twitter: "https://twitter.com/_favourolaoye",
      },
      {
        name: "Oladapo Miracle",
        position: "Lead Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/miracle1oladapo",
        ig: "https://www.instagram.com/Mabuild.dev"
      },
      {
        name: "Adeoye Prince",
        position: "Frontend Developer & UI/UX Designer",
        image:
          "https://drive.google.com/uc?export=download&id=1AORx2nyT8lvAYIbkfH9MZl1ZohzdU5Bh",
        twitter: "https://twitter.com/Adeoyeprince"
      },
      {
        name: "Araoye Timothy",
        position: "SEO Expert & Web Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        ig: "https://www.instagram.com/d.tim.ara",
      },
      {
        name: "Tinuosho Huzain",
        position: "Fullstack Developer & Social Media Manager",
        image:
          "https://drive.google.com/uc?export=download&id=19fL2oz91LDNWcG7myBBIHyKr6pCzfmIH",
        twitter: "https://twitter.com/tinuoshohuzain",
        ig: "https://www.instagram.com/Classic_freakster",
      },
      {
        name: "Adebayo Enoch",
        position: "Web Developer",
        image:
          "https://drive.google.com/uc?export=download&id=19g6JbNapp5yzKrTcen1yhj1Okdok3v_d",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
      },
      {
        name: "Akintayo Lanre",
        position: "Mobile & Blockchain Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
      },
      {
        name: "Makinde Mayowa",
        position: "Web Developer",
        image:
          "https://media.istockphoto.com/photos/portrait-of-a-mature-businessman-standing-with-his-arms-crossed-in-an-picture-id1314901662?b=1&k=20&m=1314901662&s=170667a&w=0&h=wHWRbn7-nuv4qcdBlI2tDsn7TVNzxkhwMl0WYrC9dlU=",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
      },
      {
        name: "Samuel Blessing",
        position: "Web Developer",
        image:
          "https://drive.google.com/uc?export=download&id=1AglEvcxqnxnfVC1PV9lJSjmWaSSxaaD8",
        twitter: "https://twitter.com/",
        ig: "https://www.instagram.com/",
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
                    ? scrollValue + 78
                    : scrollValue + 90
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
                    ? scrollValue - 78
                    : scrollValue - 90
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

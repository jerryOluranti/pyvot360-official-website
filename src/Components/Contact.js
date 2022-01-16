import React from 'react'

import '../styles/Contact.css'

function Contact() {
    return (
      <div className="contact" id="contact">
        <div className="contact-header">Contact Us</div>
        <div className="contact-sub-header">
          Let us take your <span>Brand/Business</span> to the next level 🚀🚀🚀
        </div>
        <div className="socials-container">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-twitter-fill"></i>
          </a>
          <a
            href="mailto:info@pyvot360.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-mail-fill"></i>
          </a>
        </div>
      </div>
    );
}

export default Contact

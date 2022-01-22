import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import '../styles/Feedbacks.css'
import Image from '../assets/feedbacks-1.svg'

function Feedbacks() {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [inView, controls]);


    return (
      <div className="feedbacks">
        <div className="section-header feedbacks-header">Feedbacks</div>
        <h2 className="feedbacks-sub-header">What Our Clients Are Saying</h2>
        <div className="feedbacks-container">
          <motion.img
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ ease: "easeIn", duration: 2 }}
            src={Image}
            alt="feedback"
            className="feedback-image"
          />
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ ease: "easeIn", duration: 2 }}
            className="feedback-content"
          >
            <div className="feedback-message">
              The company developed and hosted an institution based academic
              journal website.
                The site was unique, simple and user friendly, in its simplicity
                lies its uniqueness.
              I will surely recommend your company to others.
            </div>
            <div className="feedback-author">
              <div className="feedback-author-name">
                Dr Popoola Moshood Abiola
              </div>
              <div className="feedback-author-position">HOD, FCAH&PTIB</div>
            </div>
            <div className="feedback-arrows">
              <i className="ri-arrow-left-line"></i>
              <i className="ri-arrow-right-line"></i>
            </div>
          </motion.div>
        </div>
        <div className="feedback-tagline">Many people are happy with our services, lets make you happy too!</div>
      </div>
    );
}

export default Feedbacks

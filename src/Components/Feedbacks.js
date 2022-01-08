import React from 'react'
import writeOn from 'write-on-node'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import '../styles/Feedbacks.css'
import Image from '../assets/feedbacks-1.svg'
import Arrow from '../assets/arrow-white.svg'

function Feedbacks() {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [ tagline, setTagline ] = React.useState('');

    React.useEffect(() => {
      writeOn({
        setstate: setTagline,
        text: 'Many people are happy with our services, lets make you happy too!',
        delayTime: 0.2,
        waitTime: 3
      });
    }, [])

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
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -150 },
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
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 150 },
            }}
            transition={{ ease: "easeIn", duration: 2 }}
            className="feedback-content"
          >
            <div className="feedback-message">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique nostrum minima ducimus. Quas atque laborum veniam fugit
              quis porro veritatis, iste eveniet libero ratione, neque
              architecto magnam. Officiis, nostrum et?
            </div>
            <div className="feedback-author">
              <div className="feedback-author-name">John Doe</div>
              <div className="feedback-author-position">CEO, Company</div>
            </div>
            <div className="feedback-arrows">
              <img src={Arrow} alt="" className="feedback-arrow-left" />
              <img src={Arrow} alt="" className="feedback-arrow-right" />
            </div>
          </motion.div>
        </div>
        <div className="feedback-tagline">
         { tagline }
        </div>
      </div>
    );
}

export default Feedbacks

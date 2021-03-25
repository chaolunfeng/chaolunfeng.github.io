import React, { Component } from 'react';
import { motion } from 'framer-motion';

class About extends Component {
  render() {

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="UW"><h3>University of Washington</h3>
                  <p className="info">Bachlor of Art <span>&bull;</span><em className="date">Winter 2022</em></p>
                  <p></p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Project</span></h1>
          </div>
          <div className="nine columns main-col">
            <div key="company"><h3>Personal Website</h3>
              <p className="info">Side Project<span>&bull;</span> <em className="date">Feb 2021 - Present</em></p>
              <p>Interactive personal website built by JavaScript and React.<br />
            Used Motion API for Header section hover and click animation effect.</p>
            </div>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bars">
              <ul className="skills">
                <li >
                  <span style={{ width: "75%" }} className="bar-expand illustrator"></span>
                  <em>Java</em>
                </li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bars">
              <ul className="skills">
                <li >
                  <span style={{ width: "75%" }} className="bar-expand illustrator"></span>
                  <em>CSS</em>
                </li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bars">
              <ul className="skills">
                <li >
                  <span style={{ width: "70%" }} className="bar-expand illustrator"></span>
                  <em>JavaScript/React</em>
                </li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bars">
              <ul className="skills">
                <li >
                  <span style={{ width: "60%" }} className="bar-expand illustrator"></span>
                  <em>MySQL</em>
                </li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bars">
              <ul className="skills">
                <li >
                  <span style={{ width: "80%" }} className="bar-expand illustrator"></span>
                  <em>Git</em>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
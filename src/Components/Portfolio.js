import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Portfolio extends Component {
  render() {
    let websiteUrl = "http://chaolunfeng.github.io";

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out My Work.</h1>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div key="Personal website" className="columns portfolio-item">
                <div className="item-wrap">
                  <a href={websiteUrl} title="Personal website">
                    <img alt="Personal Website" src="images/website.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Personal Website</h5>
                        <p>Built using JavaScript and React</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
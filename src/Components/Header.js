import { motion } from 'framer-motion';
import React, { Component } from 'react';

class Header extends Component {
  render() {

      let greeting= "Welcome to my website!";
      let description= "I am a Junior @UW in Seattle. I am passionate about Full Stack Development and is actively looking for internship oppotunities.";


    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}  className="current"><a className="smoothscroll" href="#home">Home</a></motion.li>
	         <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a className="smoothscroll" href="#resume">About</a></motion.li>
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a className="smoothscroll" href="#portfolio">Portfolio</a></motion.li>
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><a className="smoothscroll" href="#about">Contact</a></motion.li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} >
               <h1 className="responsive-headline">I'm Chaolun Feng.</h1>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
               <h2>{greeting}</h2>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
               <h3>{description}</h3>
            </motion.div>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
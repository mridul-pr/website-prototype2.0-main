import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Video} className='video' autoPlay loop muted />
      <h1 className='Main-Text'>ENGINEER & BUILDERS</h1>
      <p className='Under-Text'>Defence Contract</p>
      <div className='hero-btns'>
        <ScrollLink
          to='portfolios'
          smooth={true}
          duration={500}
          offset={-80}
          className='btns'
        >
          Services
        </ScrollLink>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

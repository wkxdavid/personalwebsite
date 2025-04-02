import React from 'react';
import Personal from '../../img/DavidPham.JPG';
import './about.css';
import { aboutContent } from '../../utils/static';
function AboutPage() {
  return (
    <section id='about-section' className='about-section'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>{aboutContent.greeting}</h1>
          <p>{aboutContent.intro}</p>
          <p>{aboutContent.research}</p>
          <p>{aboutContent.leadership}</p>
        </div>
        <div className='about-image'>
          <img src={Personal} alt='David Pham' />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

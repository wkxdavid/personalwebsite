import React from 'react';
import Personal from '../../img/DavidPham.JPG';
import './about.css';

function AboutPage() {
  return (
    <section id='about-section' className='about-section'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>David Pham</h1>
          <h2>Welcome to my Personal Website!</h2>
          {/* <h3>Website was created 11/5/2024 and is still Work In Progress</h3> */}
          <p>
            Hello! I'm currently a senior at the University of Washington
            majoring in Informatics with a focus in software development. I have
            the most interest in web development with experience like
            internships, research, and teaching!
          </p>
          <p>
            Outside of academics, I have leadership in two separate clubs where
            I am the President of Valorant @ UW and I manage the mentorship
            program in the Software Engineering Career Club. Feel free to look
            around the website and shoot me an email if you have any questions!
          </p>
        </div>
        <div className='about-image'>
          <img src={Personal} alt='David Pham' />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

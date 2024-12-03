import React from 'react';
import Personal from '../../img/DavidPham.JPG';
import './about.css';

function AboutPage() {
  return (
    <section id='about-section' className='about-section'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>David Pham</h1>
          <p>
            Hello! I'm currently a senior at the University of Washington
            majoring in Informatics. Currently focusing on learning data and web
            development. Big fan of basic minimalistic design and I hope this
            website shows that. Currently focusing on learning whatever comes to
            mind.
          </p>
          <p>
            Outside of academics, I have leadership in two separate clubs, where
            I am the President of Valorant @ UW and I manage the mentorship
            program in the Software Engineering Career Club.
          </p>
          <p>
            Some of my favorite hobbies are exercising, traveling, and gaming.
            Otherwise, I love spending time with those close to me. Feel free to
            look around the website and email me if you have any questions!
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

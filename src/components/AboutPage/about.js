import React from 'react';
import Personal from '../../img/DavidPham.JPG';
import './about.css';

function AboutPage() {
  return (
    <section id='about-section' className='about-section'>
      <div className='about-container'>
        <div className='about-text'>
          <h1>Hello!</h1>
          <p>
            I'm David and I am studying <a href="https://ischool.uw.edu/">Informatics</a> with a focus in 
            Software Engineering at the University of Washington. Passionate about solving interesting problems and building connections wherever I go.
          </p>
          <p>
            While at school, I have been able to do both research for the <a href="https://faculty.washington.edu/ajko/lab">Code and Cognition Lab</a>  where 
            I worked on Wordplay and the <a href="https://www.hcde.washington.edu/">HCDE Department</a> where 
            I research content moderation using LLM's. Along with that, I have teaching assistant for a lot of the core software development 
            courses in the iSchool that involve skills with frontend and backend web development. I have also had the privilege to do internships with <a href="https://www.hp.com/us-en/home.html">HP Inc.</a> and FoodCLUB.
          </p>
          <p>
            Outside of Academics, I have spent a lot of time doing leadership positions two different clubs. I serve as the President for <a href="https://www.instagram.com/valorant_uw/">Valorant @ UW</a> and 
            Mentorship Program Manager for <a href="https://swecc.org/">Software Enginnering Career Club</a>. As graduation approaches, I’m looking forward to what’s next.
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

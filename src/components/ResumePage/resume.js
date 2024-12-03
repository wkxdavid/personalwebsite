import React from 'react';
import './resume.css';

function ResumePage() {
  return (
    <section id='resume-section' className='resume-section'>
      <p>Please email if you have questions!</p>
      <iframe
        src='https://docs.google.com/document/d/1u8Go0lS6eTKbvYy-eVjPEfg2Y08wokaDN7mJ56GE4bY/preview'
        width='100%'
        height='637px'
        title='Resume'
      ></iframe>
    </section>
  );
}

export default ResumePage;

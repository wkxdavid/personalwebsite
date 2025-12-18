import React from 'react';
import './resume.css';

function ResumePage() {
  return (
    <section id='resume-section' className='resume-section'>
      <p>
        My latest resume isn't embedded here yet, but I'm happy to share it.
        Please email me at{' '}
        <a href='mailto:phamdavid722@gmail.com'>phamdavid722@gmail.com</a>{' '}
        for a copy or more details about my experience.
      </p>
      {/* <iframe
        src='https://docs.google.com/document/d/1u8Go0lS6eTKbvYy-eVjPEfg2Y08wokaDN7mJ56GE4bY/preview'
        width='100%'
        height='637px'
        title='Resume'
      ></iframe> */}
    </section>
  );
}

export default ResumePage;

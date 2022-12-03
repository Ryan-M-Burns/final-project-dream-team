import React from 'react';
import './About.scss';

const About = () => {
  return (
    <body className='about_body'>
      <div >
        <article className='about__article'>
          <h2>Our Mission</h2>
          <p className='about_text'>We believe in connecting farmers and their
            communities. We strive to provide families with the
            freshest produce straight from the soil with the
            convenience that our society has come to expect.
            We hope that you feel as passionate as we do about sourcing
            local and we look forward to developing a long lasting
            relationship with you!
          </p>
          <p>Sincerely,</p>
          <p>The Havest Team</p>
        </article>
      </div>
      <div className='user-photos'>
         <img 
      src='/images/team_photos/taylor.jpeg' 
      alt="admin-icon"
        />
      </div>
     
    </body>
  );
};

export default About;
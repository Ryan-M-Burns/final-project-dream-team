import React from 'react';
import './About.scss';
import {Link} from 'react-router-dom';


const About = () => {
  return (
    <div className='about_body'>
      <article className='blur-area'>
        <div className='about__article'>
          <h2>Our Mission</h2>
          <p className='about_text'>We believe in connecting farmers and their
            communities. We strive to provide families with the
            freshest produce straight from the soil with the
            convenience that our society has come to expect.
            We hope that you feel as passionate as we do about sourcing
            local and we look forward to developing a long lasting
            relationship with you!
          </p>
          <br />
          <p>Sincerely,</p>
          <p>The Havest Team</p>
          <h2 className='home-link'>
          <Link to='/home'>
            Back to Home
          </Link>
          </h2>
        </div>
      </article>
      <div className='user-photos'>
        <img
          src='/images/team_photos/taylor.jpeg'
          alt="admin-icon"
        />
        <img
          src='/images/team_photos/ryan.png'
          alt="admin-icon"
        />
      </div>
    </div>
  );
};

export default About;
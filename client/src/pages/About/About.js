import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className='about_body'>
      <div className='split-in-2'>
        <div className='blur-area'>
        </div>
        <div className='about__article'>
          <h2>Our Mission</h2>
          <p className='about_text'>We believe in connecting farmers and their
            communities. We strive to provide families with the
            freshest produce straight from the soil with the
            convenience that our society has come to expect.
            We hope that you feel as passionate as we do about sourcing
            local and we look forward to cultivating a long lasting
            relationship between farmers and their communities!
          </p>
          <br />
          <p>Sincerely,</p>
          <p>The Havest Team</p>
        </div>
      </div>
      <div className='split-in-2'>
        <div className="team-member">

          <div className='user-profile'>
            <img
              src='/images/team_photos/anouk.jpg'
              alt="admin-icon"
            />
            <p>Anouk Van Boegart</p>
          </div>

          <div className='user-profile'>
            <img
              src='/images/team_photos/ryan.png'
              alt="admin-icon"
            />
            <p>Ryan Burns</p>
          </div>

          <div className='user-profile'>
            <img
              src='/images/team_photos/taylor.jpeg'
              alt="admin-icon"
            />
            <p>Taylor Smith</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
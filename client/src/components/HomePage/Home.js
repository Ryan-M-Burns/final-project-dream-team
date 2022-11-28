import React from 'react';
import NavButton from './HomePageComponents/NavButton';
import BoxCarousel from './HomePageComponents/BoxCarousel';
import './Home.scss';
const Home = () => {
  return (
    <section>
      <BoxCarousel />
      <ul>
        <li>
          <NavButton link={"/produce"} pageName={"PRODUCE"} />
          <NavButton link={"/boxes"} pageName={"MADE FOR YOU"} />
          <NavButton link={"/meet-the-farmers"} pageName={"MEET OUR FARMERS"} />
        </li>
        <li>
          <NavButton link={"/our-mission"} pageName={"OUR MISSION"} />
          <NavButton link={"/produce"} pageName={"PRODUCE"} />
          <NavButton link={"/contact"} pageName={"REACH OUT"} />
        </li>
      </ul>
    </section>

  );
};

export default Home;
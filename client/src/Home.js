import React from 'react';
import NavButton from './components/home-page/NavButton';
import BoxCarousel from './components/home-page/BoxCarousel';
import './Home.scss';
const Home = () => {
  return (
    <section>
      <BoxCarousel />
      <ul>
        <li>
          <NavButton link={"/produce"} name={"PRODUCE"} />
          <NavButton link={"/boxes"} name={"MADE FOR YOU"} />
          <NavButton link={"/meet-the-farmers"} name={"MEET OUR FARMERS"} />
        </li>
        <li>
          <NavButton link={"/our-mission"} name={"OUR MISSION"} />
          <NavButton link={"/produce"} name={"PRODUCE"} />
          <NavButton link={"/contact"} name={"REACH OUT"} />
        </li>
      </ul>
    </section>

  );
};

export default Home;
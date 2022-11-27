import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './BoxCarousel.scss';


const BoxCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src="images/banana.png" alt="Banana" />
        <img src="images/phone.png" alt="Phone" />
        <Carousel.Caption>
          <h3>Carousel 1</h3>
          <p>Ring Ring Ring Ring Banana Phone</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="images/phone.png" alt="Help" />
        <img src="images/banana.png" alt="Banana" />
        <Carousel.Caption>
          <h3>Carousel 2</h3>
          <p>It's a phone with a peal</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="images/banana.png" alt="Banana" />
        <img src="images/phone.png" alt="Help" />
        <Carousel.Caption>
          <h3>Carousel 3</h3>
          <p>It'll drive you Bananas</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BoxCarousel;
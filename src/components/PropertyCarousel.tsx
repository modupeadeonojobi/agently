import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import FamilyOne from './../assets/img/family-one.jpg';
import FamilyTwo from './../assets/img/family-two.jpg';
import FamilyThree from './../assets/img/family-three.jpg';

import './PropertyCarousel.css'

type CarouselProp = {
  className?: string
}
export const PropertyCarousel = (props: CarouselProp) => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <img
          className={props.className}
          src={FamilyTwo}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.className}
          src={FamilyOne}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={props.className}
          src={FamilyThree}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
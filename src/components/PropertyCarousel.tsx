import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './PropertyCarousel.css'

type CarouselProp = {
  className?: string,
  firstSlide?: string,
  secondSlide?: string,
  thirdSlide?: string,
  showPrevIcon: boolean
}
export const PropertyCarousel = ({ className, firstSlide, secondSlide, thirdSlide, showPrevIcon}: CarouselProp) => {
  return (
    <Carousel fade controls={showPrevIcon}>
      <Carousel.Item>
        <img
          className={className}
          src={firstSlide}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={className}
          src={secondSlide}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={className}
          src={thirdSlide}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
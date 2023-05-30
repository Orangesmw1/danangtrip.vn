import React, { createRef } from "react";
import { Carousel } from "antd";
import "./CarouselPost.css";
import BoxClone from "./BoxClone";

const CarouselPost = ({ carouselRef }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Carousel
        className="carousel-featured-post"
        ref={carouselRef}
        autoplay
        afterChange={onChange}
      >
        <BoxClone />
        <BoxClone />
      </Carousel>
    </>
  );
};

export default CarouselPost;

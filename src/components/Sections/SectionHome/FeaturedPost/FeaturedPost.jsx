import React, { createRef } from "react";
import "./FeaturedPost.css";
import CarouselPost from "./CarouselPost/CarouselPost";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const FeaturedPost = () => {
  const carouselRef = createRef();

  return (
    <div className="featured-post-homepage mx-auto px-20 pt-20">
      <div className="box-title">
        <h4 className="title-featured-post text-blackPanel">Đi đâu & làm gì</h4>
        <div className="box-next-prev">
          <LeftCircleOutlined
            className=" text-blackPanel"
            onClick={() => carouselRef.current.prev()}
          />
          <RightCircleOutlined
            className=" text-blackPanel"
            onClick={() => carouselRef.current.next()}
          />
        </div>
      </div>
      <CarouselPost carouselRef={carouselRef} />
    </div>
  );
};

export default FeaturedPost;

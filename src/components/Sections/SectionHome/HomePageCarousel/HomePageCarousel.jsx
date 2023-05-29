import React from "react";
import videoCarousel from "../../../../assets/Video/0529.mp4";
import "./HomePageCarousel.css";
import { Input, Space } from "antd";

const HomePageCarousel = () => {
  const { Search } = Input;

  const onSearch = (value) => console.log(value);
  return (
    <div className="carousel-homepage">
      <div className="container mx-auto ">
        <div className="box-video">
          <div className="overlay-carousel"></div>
          <video autoPlay muted loop>
            <source src={videoCarousel} />
          </video>

          <div className="box-search">
            <h5>Khám phá những điều mới</h5>
            <p>Trải nghiệm & khám phá những niềm vui của riêng bạn</p>
            <Search
              className="input-search-carousel"
              placeholder="Khám phá tại đây"
              enterButton="Tìm kiếm"
              size="large"
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;

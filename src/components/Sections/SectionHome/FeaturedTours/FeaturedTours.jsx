import React from "react";
import { Card, Col, Row } from "antd";
import "./FeaturedTours.css";
import BoxColTour from "./BoxColTour";

const FeaturedTours = () => {
  return (
    <div className="featured-tour">
      <div className="carousel mx-auto px-20">
        <h4 className="text-blackPanel pb-4">Các tour nổi bật</h4>
        <Row gutter={16}>
          <BoxColTour />
          <BoxColTour />
          <BoxColTour />
          <BoxColTour />
        </Row>
      </div>

      <div className="box-more">
        <button className="btn-more">Xem thêm</button>
      </div>
    </div>
  );
};

export default FeaturedTours;

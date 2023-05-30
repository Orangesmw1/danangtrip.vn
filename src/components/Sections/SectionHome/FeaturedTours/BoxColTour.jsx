import React from "react";
import { Card, Col, Row } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const BoxColTour = () => {
  return (
    <Col span={6}>
      <Card
        className="card-form"
        hoverable
        style={{
          width: 300,
        }}
        cover={
          <img
            style={{ height: "200px", objectFit: "cover" }}
            alt="example"
            src="https://images.unsplash.com/photo-1519458498024-9448c70cbae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbiUyMHRyYSUyMG1vdW50YWluJTIwdmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        }
      >
        <h6>Tour Đà Nẵng</h6>
        <h4>Tour 3N2D Đà Nẵng đã bao gồm vé máy bay</h4>
        <div className="box-other">
          <span className="box-favorite">
            <HeartOutlined /> 200
          </span>
          <span className="box-discount">-20%</span>
        </div>
        <span className="box-price">
          Từ <span>1.280.000 VND</span>
        </span>
      </Card>
    </Col>
  );
};

export default BoxColTour;

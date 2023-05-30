import React from "react";
import imgbtn from "../../../../../assets/Image/xemthembtn.png";

const BoxClone = () => {
  return (
    <div className="box-clone">
      <ul>
        <li>
          <img
            className="img-background"
            src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80"
            alt=""
          />
          <img className="img-button" src={imgbtn} alt="" />
        </li>
        <li>
          <img
            className="img-background"
            src="https://images.unsplash.com/photo-1555980483-93e7b3529e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <img className="img-button" src={imgbtn} alt="" />
        </li>

        <li>
          <img
            className="img-background"
            src="https://images.unsplash.com/photo-1516484681091-7d83961805f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1356&q=80"
            alt=""
          />
          <img className="img-button" src={imgbtn} alt="" />
        </li>
        <li>
          <img
            className="img-background"
            src="https://images.unsplash.com/photo-1508075679049-7e5dc384e98b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <img className="img-button" src={imgbtn} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default BoxClone;

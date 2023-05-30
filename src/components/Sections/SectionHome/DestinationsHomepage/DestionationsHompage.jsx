import React from "react";
import "./DestinationsHomepage.css";
import imgTitleDestinations from "../../../../assets/Image/title-destinations.png";
import { NavLink } from "react-router-dom";

const DestionationsHompage = () => {
  return (
    <div className="destionations-hompage mx-auto px-20 ">
      <div className="box-destinations">
        <img className="title-img" src={imgTitleDestinations} alt="" />
        <div className="box-img-options">
          <div className="box-img-content">
            <NavLink to={`/blogs/1`}>
              <span className="title-box">Đà Nẵng</span>
              <img
                src="https://images.unsplash.com/photo-1569514831066-93529ffe6bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt=""
              />
            </NavLink>
          </div>
          <div className="box-img-content">
            <NavLink to={`/blogs/2`}>
              <span className="title-box">Huế</span>
              <img
                src="https://images.unsplash.com/photo-1674798200696-053189efcaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </NavLink>
          </div>

          <div className="box-img-content">
            <NavLink to={`/blogs/3`}>
              <span className="title-box">Hội An</span>
              <img
                src="https://images.unsplash.com/photo-1638684985445-6133cedc37b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                alt=""
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestionationsHompage;

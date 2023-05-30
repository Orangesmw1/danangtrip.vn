import React from "react";
import "./LabelContent.css";
import { NavLink } from "react-router-dom";

const LabelContent = (props) => {
  const { nameDestination, imgUrl, id, handleCancel } = props;

  return (
    <div className="label-content">
      <img src={imgUrl} alt="" />

      <span className="title-label">{nameDestination}</span>

      <button>
        <NavLink to={`/blogs/${id}`} className="detail" onClick={handleCancel}>
          Chi tiết
        </NavLink>
      </button>
    </div>
  );
};

export default LabelContent;

import React from "react";
import "./popeverContentUser.css";
import { useNavigate } from "react-router-dom";

const PopeverContentUser = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };

  return (
    <div className="popeverContentUser">
      <ul>
        <li>Thông tin</li>
        <li onClick={handleLogout}>Thoát</li>
      </ul>
    </div>
  );
};

export default PopeverContentUser;

import React, { useEffect, useState } from "react";
import { SlackOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Popover, Space } from "antd";
import "./Header.css";

import DropdownLanguage from "./Dropdown/DropdownLanguage/DropdownLanguage";
import SearchHeader from "./Search/SearchHeader";
import { NavLink } from "react-router-dom";
import Categories from "./Categories/Categories";
import PopeverContentUser from "./PopeverContentUser/PopeverContentUser";
import axios from "axios";

const Header = () => {
  const userLoginLocal = JSON.parse(localStorage.getItem("userLogin"));
  const [dataUserLogin, setDataUserLogin] = useState(null);

  useEffect(() => {
    if (userLoginLocal) {
      fetchUserLogin();
    }
  }, [userLoginLocal]);

  const fetchUserLogin = async () => {
    const { access_token } = userLoginLocal;
    const res = await axios.get("http://localhost:5000/api/v1/user", {
      headers: {
        Authorization: `${access_token}`,
      },
    });

    if (res.data) {
      setDataUserLogin(res.data);
    }
  };

  return (
    <div className="header">
      <div className="container mx-auto px-20">
        <header>
          <div className="box-header-left">
            <div className="header-logo">
              <span className="logo">
                <SlackOutlined className="text-red-500" />
              </span>
              <span className="name-company text-orange-400">
                <NavLink to={"/"}>Danangtrip</NavLink>
              </span>
            </div>
            <div className="header-search">
              <SearchHeader />
            </div>

            <Categories />
          </div>

          <div className="box-header-right">
            <ul>
              <li className="header-change-language">
                <DropdownLanguage />
              </li>

              <li className="header-open-app">Mở ứng dụng</li>
              <li className="header-help">Trợ giúp</li>

              {userLoginLocal ? (
                <li className="box-name-user ">
                  <p className="inline-block pr-2 ">
                    {dataUserLogin?.userData?.name}
                  </p>
                  <Popover content={<PopeverContentUser />} trigger="click">
                    <UserOutlined
                      className="pb-2"
                      style={{ fontSize: "1.3rem" }}
                    />
                  </Popover>
                </li>
              ) : (
                <>
                  <li className="header-btn-register">
                    <NavLink to={"/register"}>Đăng ký</NavLink>
                  </li>
                  <li className="header-btn-login ">
                    <NavLink to={"/login"}>Đăng nhập</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

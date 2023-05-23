import React from "react";
import { SlackOutlined } from "@ant-design/icons";
import "./Header.css";

import DropdownLanguage from "./Dropdown/DropdownLanguage/DropdownLanguage";
import SearchHeader from "./Search/SearchHeader";
import { NavLink } from "react-router-dom";
import Categories from "./Categories/Categories";

const Header = () => {
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
              {/* <li className="header-change-money">
                <DropdownCoin />
              </li> */}
              <li className="header-open-app">Mở ứng dụng</li>
              <li className="header-help">Trợ giúp</li>
              <li className="header-btn-register">
                <NavLink to={"/register"}>Đăng ký</NavLink>
              </li>
              <li className="header-btn-login ">
                <NavLink to={"/login"}>Đăng nhập</NavLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

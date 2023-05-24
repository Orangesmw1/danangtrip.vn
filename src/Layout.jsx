import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";

const Layout = ({ children }) => {
  const userLoginLocal = JSON.parse(localStorage.getItem("userLogin"));
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    userLoginLocal ? setIsLogin(true) : setIsLogin(false);
  }, [userLoginLocal]);

  return (
    <div className="font-serif">
      <Header isLogin={isLogin} />
      {children}
    </div>
  );
};

export default Layout;

import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const Company = () => {
  // useEffect(() => {
  //   const callApi = async () => {
  //     const res = await axios.get("http://localhost:8000/v1/user/");

  //     console.log(res);
  //   };

  //   callApi();
  // }, []);

  return (
    <div className="font-serif">
      <Header />
      <Outlet />
    </div>
  );
};

export default Company;

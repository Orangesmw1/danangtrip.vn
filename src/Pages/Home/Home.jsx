import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersState$ } from "../../redux/selectors";

const Home = () => {
  const listUser = useSelector(usersState$);

  return <div>Home</div>;
};

export default Home;

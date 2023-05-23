import { Tabs } from "antd";
import React from "react";
import "./ChildrenDestination.css";
import Entertaiment from "./Entertaiment/Entertaiment";
import Stay from "./Stay/Stay";
import Move from "./Move/Move";
import Food from "./Food/Food";

const ChildrenDestination = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Vui chơi & giải trí",
      children: <Entertaiment />,
    },
    {
      key: "3",
      label: "Lưu trú",
      children: <Stay />,
    },
    {
      key: "4",
      label: "Di chuyển",
      children: <Move />,
    },
    {
      key: "5",
      label: "Ẩm thực",
      children: <Food />,
    },
  ];

  return (
    <>
      <Tabs
        tabPosition="top"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </>
  );
};

export default ChildrenDestination;

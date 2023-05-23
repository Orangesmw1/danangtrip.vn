import React from "react";
import "./ContentTable.css";
import { Tabs } from "antd";
import LabelContent from "./LabelContent/LabelContent";
import ChildrenDestination from "../Children/ChildrenDestination";

const ContentTable = ({ handleCancel }) => {
  const items = [
    {
      key: "1",
      label: (
        <LabelContent
          handleCancel={handleCancel}
          id="1"
          nameDestination={"Đà Nẵng"}
          imgUrl={
            "https://images.unsplash.com/photo-1569514831066-93529ffe6bc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          }
        />
      ),
      children: <ChildrenDestination />,
    },
    {
      key: "2",
      label: (
        <LabelContent
          handleCancel={handleCancel}
          id="2"
          nameDestination={"Huế"}
          imgUrl={
            "https://images.unsplash.com/photo-1674798200696-053189efcaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          }
        />
      ),
      children: <ChildrenDestination />,
    },
    {
      key: "3",
      label: (
        <LabelContent
          handleCancel={handleCancel}
          id="3"
          nameDestination={"Hội An"}
          imgUrl={
            "https://images.unsplash.com/photo-1665236737650-e6d8d2a0637b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=352&q=80"
          }
        />
      ),
      children: <ChildrenDestination />,
    },
  ];

  return (
    <>
      <Tabs tabPosition="left" defaultActiveKey="1" items={items} />
    </>
  );
};

export default ContentTable;

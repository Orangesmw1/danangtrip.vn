import React, { useState } from "react";
import LabelDropdownCoin from "./LabelDropdownCoin";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropdownCoin = () => {
  const [contentDrop, setContentDrop] = useState("VND");

  const handleSetContentDrop = (content) => {
    setContentDrop(content);
  };

  const items = [
    {
      label: (
        <LabelDropdownCoin
          handleSetContentDrop={handleSetContentDrop}
          content={"VND"}
        />
      ),
      key: "0",
    },
    {
      label: (
        <LabelDropdownCoin
          handleSetContentDrop={handleSetContentDrop}
          content={"USD"}
        />
      ),
      key: "1",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["hover"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        {contentDrop}
        <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default DropdownCoin;

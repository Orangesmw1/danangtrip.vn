import React, { useState } from "react";
import logoVN from "../../../../assets/Ensign/vietnam.svg";
import logoUS from "../../../../assets/Ensign/US.svg";
import LabelDropdownLanguage from "./LabelDropdownLanguage";
import { Popover } from "antd";

const DropdownLanguage = () => {
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(logoVN);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const hide = () => {
    setOpen(false);
  };

  const handleSetLanguage = (name) => {
    if (name === "vietnam") {
      setLogo(logoVN);
      hide();
    } else {
      setLogo(logoUS);
      hide();
    }
  };

  return (
    <Popover
      content={
        <LabelDropdownLanguage
          logoVN={logoVN}
          logoUS={logoUS}
          handleSetLanguage={handleSetLanguage}
        />
      }
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <p className="flex items-center content-drop-language">
        <img src={logo} alt="" />
      </p>
    </Popover>
  );
};

export default DropdownLanguage;

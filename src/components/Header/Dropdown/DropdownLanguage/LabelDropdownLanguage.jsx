import React from "react";

const LabelDropdownLanguage = ({ logoVN, logoUS, handleSetLanguage }) => {
  return (
    <div className="">
      <div onClick={() => handleSetLanguage("vietnam")}>
        <p className="flex content-drop-language">
          <img src={logoVN} alt="" />
          <span>Việt Nam</span>
        </p>
      </div>
      <br />
      <div onClick={() => handleSetLanguage("us")}>
        <p className="flex content-drop-language">
          <img src={logoUS} alt="" />
          <span>US</span>
        </p>
      </div>
    </div>
  );
};

export default LabelDropdownLanguage;

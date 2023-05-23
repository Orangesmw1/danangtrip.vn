import React from "react";

const LabelDropdownCoin = (props) => {
  const { content, handleSetContentDrop } = props;
  return (
    <div>
      <p
        className="flex content-drop-coin"
        onClick={() => handleSetContentDrop(content)}
      >
        {content}
      </p>
    </div>
  );
};

export default LabelDropdownCoin;

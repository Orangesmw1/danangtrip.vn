import React from "react";
import { Input } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const SearchHeader = () => {
  return (
    <Search
      placeholder="Tìm theo điểm đến, hoạt động"
      onSearch={onSearch}
      style={{
        width: 250,
      }}
    />
  );
};

export default SearchHeader;

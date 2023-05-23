import React from "react";
import "./Categories.css";
import CategoriesContent from "./CategoriesContent/CategoriesContent";

const Categories = () => {
  return (
    <div className="categories">
      <div className="btn-categories ">
        <CategoriesContent />
      </div>
    </div>
  );
};

export default Categories;

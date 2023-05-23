import React from "react";
import { Modal } from "antd";
import { useState } from "react";
import ContentTable from "./ContentTable/ContentTable";
import "./CategoriesContent.css";

const CategoriesContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <p type="primary" onClick={showModal} data-target="#modalCategories">
        <i className="fa fa-umbrella-beach pr-2 "></i>
        <span className="font-serif pr-1">Điểm đến</span>
      </p>
      <Modal
        open={isModalOpen}
        okType={null}
        onCancel={handleCancel}
        id="modalCategories"
        className="modal-categories"
      >
        <ContentTable handleCancel={handleCancel} />
      </Modal>
    </>
  );
};

export default CategoriesContent;

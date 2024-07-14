import React, { useState } from "react";
import "./Modal.css";
import Modal from "./Modal";

const XModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userContactNo: "",
    userDob: "",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    if (formData.userContactNo === "" || formData.userContactNo.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (
      new Date(formData.userDob).getFullYear() > new Date().getFullYear() ||
      new Date(formData.userDob).getMonth() > new Date().getMonth() ||
      new Date(formData.userDob).getDate() > new Date().getDate()
    ) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      setFormData({
        userName: "",
        userEmail: "",
        userContactNo: "",
        userDob: "",
      });
    }
  };

  let handleModal = (e) => {
    // e.stopPropagation();
    setIsModalOpen(false);
  };

  let handleFormModal = (e) => {
    e.stopPropagation();
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  let handleParent = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      console.log(2);
    }
  };

  return (
    <div className="modal" onClick={handleParent}>
      <h1>User Details Modal</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Form</button>
      <div className="modal-content">
        {isModalOpen && (
          <Modal
            formData={formData}
            handleSubmit={handleSubmit}
            handleModal={handleModal}
            handleFormModal={handleFormModal}
            handleChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default XModal;

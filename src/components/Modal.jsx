import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userContactNo: "",
    userDob: "",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    if (formData.userContactNo === "" || formData.userContactNo.length < 10) {
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
    e.stopPropagation();
    setIsModalOpen(false);
  };

  let handleFormModal = (e) => {
    e.stopPropagation();
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Form</button>
      {isModalOpen && (
        <div className="modal-content" onClick={handleModal}>
          <form action="" onSubmit={handleSubmit} onClick={handleFormModal}>
            <h1>Fill Details</h1>
            <div>
              <label htmlFor="username">Username:</label>
              <br />
              <input
                id="username"
                type="text"
                value={formData.userName}
                name="userName"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <br />
              <input
                id="email"
                type="email"
                value={formData.userEmail}
                name="userEmail"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <br />
              <input
                id="phone"
                type="tel"
                value={formData.userContactNo}
                name="userContactNo"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <br />
              <input
                id="dob"
                type="date"
                value={formData.userDob}
                name="userDob"
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Modal;

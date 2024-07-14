import React from "react";

const Modal = ({
  formData,
  handleSubmit,
  handleModal,
  handleFormModal,
  handleChange,
}) => {
  return (
    <div className="modal" onClick={handleModal}>
      <div className="modal-content">
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
    </div>
  );
};

export default Modal;

import React, { useState } from "react";
import styles from "./Form.module.css"; // by using module css
import "../styles/form.scss";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Здесь можно обработать отправку формы
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8000/api/register", formData)
          .then((res) => {
              console.log("Form submitted successfully");
            console.log(res.data);
        })
        .catch((err) => {
          console.log("Form submission failed", err);
        });
    };

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleInputChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={handleInputChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={handleInputChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
}

export default Register;
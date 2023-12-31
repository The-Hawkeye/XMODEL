// Form.js
import "./Form.css";
import { useState } from "react";

const Form = ({ handleClick }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // Additional validation for Date of Birth (if needed)


    const currentDate = new Date();
    const selectedDate = new Date(dob);

    if (selectedDate > currentDate) {
      alert("Invalid Date of Birth. Please select a date in the past.");
      return;
    }


    // Handle form submission logic here

    // Close the modal
    handleClick(e);
  };

  return (
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Username:</label>
          <br />
          <input
            type="text"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            id="username"
          />
          <br />
          <label>Email Address:</label>
          <br />
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="email"
          />
          <br />
          <label>Phone Number:</label>
          <br />
          <input
            type="tel"
            className="input-field"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            id="phone"
          />
          <br />
          <label>Date of Birth:</label>
          <br />
          <input
            type="date"
            className="input-field"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            id="dob"
          />
          <div>
          <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
    </div>
  );
};

export default Form;

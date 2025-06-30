import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && gender && dob) {
      onSubmit({ name, gender, dob });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="title">Enter Your Details</div>
      <label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />
      </label>
      <label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          className="input"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          
          className="input"
        />
      </label>
      <button type="submit" className="submit">
        Enter Chat
      </button>
    </form>
  );
};

export default UserForm;

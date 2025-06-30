import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && gender && dob) {
      onSubmit({ name, gender, dob });
    }
  };

  return (
    <div className='chat-container'>
      <div className='chat-box'>
        <h2 className='chat-header'>Enter Your Details</h2>
        <form onSubmit={handleSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className='chat-input'
            style={{ margin: '0' }}
          />
          <select 
            value={gender} 
            onChange={e => setGender(e.target.value)} 
            required
            className='chat-input'
            style={{ margin: '0' }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            value={dob}
            onChange={e => setDob(e.target.value)}
            required
            className='chat-input'
            style={{ margin: '0' }}
          />
          <button type="submit" className='send-button'>Enter Chat</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
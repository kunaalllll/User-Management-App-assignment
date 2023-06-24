import React, { useState } from 'react';

function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (phone.trim() === '') {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Invalid phone number (10 digits required)';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleAddUser = () => {
    if (validateForm()) {
      const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
      };

      addUser(newUser);
      setName('');
      setEmail('');
      setPhone('');
      setErrors({});
    }
  };

  return (
    <div className="user-form-container">
      <div className="form-row">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="form-row">
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-row">
        <label className="form-label">Phone</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter your phone number"
          value={phone}
          onChange={handlePhoneChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <button className="add-user-button" onClick={handleAddUser}>
        Add User
      </button>
    </div>
  );
}

export default UserForm;
import React, { useState } from 'react';

function UserItem({ user, editUser, deleteUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleDelete = () => {
    deleteUser(user.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (isEditing) {
    return (
      <li className="user-item-card">
        <input
          type="text"
          name="name"
          value={editedUser.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          value={editedUser.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          value={editedUser.phone}
          onChange={handleInputChange}
        />
        <button className="edit-button" onClick={handleSave}>Save</button>
        <button className="edit-button" onClick={handleCancel}>Cancel</button>
      </li>
    );
  }

  return (
    <li className="user-item-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button className="edit-button" onClick={handleEdit}>Edit</button>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default UserItem;
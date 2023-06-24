import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserItem from './UserItem';


function UserApp() {
  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    return storedUsers || [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const editUser = (editedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="user-app-container">
      <nav className="navbar">
        <h1 className="navbar-title">User Management</h1>
      </nav>
      <div className="content-container">
        <div className="user-form-container">
          <h2 className="section-title">Add User</h2>
          <UserForm addUser={addUser} />
        </div>
        <div className="user-list-container">
          <h2 className="section-title">User List</h2>
          <ul className="user-list">
            {users.map((user) => (
              <UserItem
                key={user.id}
                user={user}
                editUser={editUser}
                deleteUser={deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserApp;
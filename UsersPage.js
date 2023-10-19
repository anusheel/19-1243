// UsersPage.js
import React from 'react';
import UserTable from './UserTable';

const UsersPage = () => {
  const users = [
    { id: 1, name: 'John Doe', address: '123 Main St', phone: '123-456-7890' },
    { id: 2, name: 'Jane Doe', address: '456 Elm St', phone: '987-654-3210' },
    // Add more users as needed
  ];

  return (
    <div>
      <h1>Users</h1>
      <UserTable users={users} />
    </div>
  );
};

export default UsersPage;
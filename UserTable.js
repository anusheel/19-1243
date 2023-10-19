// UserTable.js
import React from 'react';

const UserTable = ({ users }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.address}</td>
          <td>{user.phone}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
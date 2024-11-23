import React, { useState } from 'react';

function AuthenticationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      setUsers([...users, { username, password }]);
      setUsername('');
      setPassword('');
    }
  };

  const handleDelete = (indexToDelete) => {
    setUsers(users.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>Authentication Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>User List</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username}{' '}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthenticationForm;

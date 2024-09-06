import React, { useState, useEffect } from 'react';

const Account = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (username, password) => {
    // TO DO: implement login logic here
    // for now, just set the user state
    setUser({ username, password });
    localStorage.setItem('user', JSON.stringify({ username, password }));
  };

  const handleLogout = () => {
    setUser({});
    localStorage.removeItem('user');
  };

  return (
    <div>
      <h2>Account</h2>
      {user.username ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form>
          <label>Username:</label>
          <input type="text" />
          <br />
          <label>Password:</label>
          <input type="password" />
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
      )}
    </div>
  );
};

export default Account;
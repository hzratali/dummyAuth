import React, { useState } from "react";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("userId", data.id);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="login_container">
      <div className="container">
        <h2>Login</h2>
        <div className="input_box">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input_box">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;

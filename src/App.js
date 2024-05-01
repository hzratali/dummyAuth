import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Profile from "./Profile";

const App = () => {
  const [token, setToken] = useState(null);
  console.log(token, "token");
  return <div>{!token ? <Login setToken={setToken} /> : <Profile />}</div>;
};

export default App;

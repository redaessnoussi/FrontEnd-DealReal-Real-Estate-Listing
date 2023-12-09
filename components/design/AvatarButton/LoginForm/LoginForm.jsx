import React, { useState } from "react";
import axios from "axios";
import ButtonLg from "components/design/Buttons/ButtonLg";
require("dotenv").config();

function LoginForm({ style }) {
  // for login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const apiURL = process.env.API_URL;

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiURL}/api/login`, {
        username: username,
        password: password,
      });

      // Handle the response as needed
      console.log(response.data);

      // You may want to store the authentication token in state or a cookie
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      // Handle login failure, display error message to the user, etc.
    }
  };

  return (
    <form>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className={`block w-full ${style.input_default}`}
          id="login-email"
          aria-describedby="username"
          placeholder="Username*"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 inline-block text-title-800 font-bold"
        >
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={`block w-full ${style.input_default}`}
          id="login-password"
          aria-describedby="password"
          placeholder="Password*"
        />
      </div>

      <ButtonLg
        type={`button`}
        onClick={handleLogin}
        className="bg-secondary-500 hover:bg-secondary-700 hover:border-secondary-700 border-secondary-500 text-white w-full justify-center mb-4"
      >
        Login
      </ButtonLg>
    </form>
  );
}

export default LoginForm;

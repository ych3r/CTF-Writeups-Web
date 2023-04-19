import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../services/auth-thunks";
import { registerThunk } from "../../services/auth-thunks";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk({ username, password }));
      navigate("/profile");
    } catch (e) {
      alert(e);
    }
  };
  const handleRegister = async () => {
    try {
      await dispatch(registerThunk({ username, password }));
      navigate("/profile");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <>
      <div>
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={handleLogin}>
        Login
      </button>
      <button className="btn btn-secondary mt-2 ms-2" onClick={handleRegister}>
        Register
      </button>
    </>
  );
};

export default LoginComponent;

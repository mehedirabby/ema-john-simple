import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="from-title">Login</h2>
      <form>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input type="submit" className="submit" />
      </form>
      <p>
        New to ema john? <Link to="/signup">Create a New Account</Link>{" "}
      </p>
    </div>
  );
};

export default Login;

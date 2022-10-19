import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="form-container">
      <h2 className="from-title">Sign Up</h2>
      <form>
        <div className="from-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="from-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="from-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input type="submit" className="submit" />
      </form>
      <p>
        Already Have an Account? <Link to="/login">Log In</Link>{" "}
      </p>
    </div>
  );
};

export default Signup;

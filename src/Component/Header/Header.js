import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../Context/userContext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button className="btn-logout" onClick={logOut}>
            Log out
          </button>
        ) : (
          <>
            <Link to="/login">Log In </Link>
            <Link to="/signup">Sign up </Link>
          </>
        )}
        <span className="email">{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;

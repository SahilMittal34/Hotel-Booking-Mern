import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Register</button>
            </Link>
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Login</button>
            </Link>
          </div>
          )}
        {user && (
          <div className="navItems">
            <Link to ="/logout" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">logout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ProfileIcon from "@/assets/ProfileIcon.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("token")),
  );

  useEffect(() => {
    const syncAuthentication = () => {
      setIsAuthenticated(Boolean(localStorage.getItem("token")));
    };

    window.addEventListener("authchange", syncAuthentication);
    return () => window.removeEventListener("authchange", syncAuthentication);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authchange"));
    navigate("/Login");
  };

  return (
    <div className="Nav">
      <h2>Quiz-Master</h2>
      <div className="dashboard">
        <Link to="/" className="navlink">
          Dashboard
        </Link>
      </div>
      {isAuthenticated && (
        <div className="profile-nav">
          <Link to="/Login" className="navlink">
            <img src={ProfileIcon} alt="Profile" />
            Profile
          </Link>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

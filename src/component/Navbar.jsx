import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ProfileIcon from "@/assets/ProfileIcon.png";
import { apiRequest } from "../services/api";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    Boolean(localStorage.getItem("token")),
  );
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadProfile = async (token) => {
      try {
        const response = await apiRequest("/auth/me");
        const result = await response.json();
        if (!response.ok) {
          throw new Error("Could not load profile");
        }

        const profile =
          result.user ?? result.data?.user ?? result.data ?? result;
        if (localStorage.getItem("token") === token) {
          setUser(profile);
        }
      } catch {
        if (localStorage.getItem("token") === token) {
          setUser(null);
        }
      }
    };

    const syncAuthentication = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(Boolean(token));
      setUser(null);
      if (token) {
        loadProfile(token);
      }
    };

    window.addEventListener("authchange", syncAuthentication);
    const token = localStorage.getItem("token");
    if (token) {
      loadProfile(token);
    }
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
          <details className="profile-details">
            <summary className="profile-button">
              <img src={ProfileIcon} alt="" />
              {user?.name ||
                user?.fullName ||
                user?.username ||
                user?.email ||
                "Profile"}
            </summary>
            <div className="profile-popover">
              <strong>
                {user?.name ||
                  user?.fullName ||
                  user?.username ||
                  "Your profile"}
              </strong>
              {user?.username && user?.username !== user?.name && (
                <span>@{user.username}</span>
              )}
              {user?.email && <span>{user.email}</span>}
            </div>
          </details>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

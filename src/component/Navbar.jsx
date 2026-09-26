import { Link } from "react-router";
import ProfileIcon from "@/assets/ProfileIcon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav">
      <h2>Quiz-Master</h2>
      <div className="dashboard">
        <Link to="/" className="navlink">
          Dashboard
        </Link>
      </div>
      <div className="profile-nav">
        <Link to="/Login" className="navlink">
          <img src={ProfileIcon} alt="ProfileIcon" />
          Profile
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

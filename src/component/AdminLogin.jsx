import { useNavigate } from "react-router";
import "./Auth.css";

function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventdefault;
    const token = "admin-login-token";
    localStorage.setItem("token", token);
    navigate("/Quiz");
  };

  return (
    <div className="auth-page admin-auth">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <h2>
          Username <b>:</b>{" "}
          <input
            type="text"
            name="Username"
            placeholder="Please enter username"
            required
          />
        </h2>
        <h2>
          Password <b>:</b>{" "}
          <input
            type="password"
            name="password"
            placeholder="Please enter Password"
            required
          />
        </h2>

        <button>Log in</button>
      </form>
    </div>
  );
}

export default AdminLogin;

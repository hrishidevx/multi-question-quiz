import { Link } from "react-router";
import "./Login.css";

function Login() {
  return (
    <div className="login-options">
      <span className="eyebrow">YOUR QUIZ MASTER ACCOUNT</span>
      <h1>Choose how to sign in.</h1>
      <Link to="/AdminLogin" className="Admin">
        Admin Login
      </Link>
      <Link to="/StudentLogin" className="Student">
        Student Login
      </Link>
    </div>
  );
}

export default Login;

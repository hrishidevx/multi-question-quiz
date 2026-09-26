// import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Question from "./Pages/Question";
import Result from "./Pages/Result";
import Protected from "./component/Protected";
import StudentLogin from "./component/StudentLogin";
import AdminLogin from "./component/AdminLogin";
import Signup from "./component/Signup";

// const Navbar = lazy(() => import("./component/Navbar"));
// const Home = lazy(() => import("./Pages/Home"));
// const Login = lazy(() => import("./Pages/Login"));
// const Quiz = lazy(() => import("./Pages/Quiz"));
// const Question = lazy(() => import("./Pages/Question"));
// const Protected = lazy(() => import("./component/Protected"));
// const StudentLogin = lazy(() => import("./component/StudentLogin"));
// const AdminLogin = lazy(() => import("./component/AdminLogin"));
// const Signup = lazy(() => import("./component/Signup"));

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/result" element={<Result />} />
        <Route path="/Quiz" element={<Protected />}>
          <Route index element={<Quiz />} />
          {/* <Route path="/Quiz" element={<Quiz />} /> */}
          <Route path="mathquiz/:id" element={<Question />} />
          <Route path="computerquiz/:id" element={<Question />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

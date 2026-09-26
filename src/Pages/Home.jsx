import { Link } from "react-router";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="about">
        <span className="eyebrow">QUIZ MASTER / PRACTICE MODE</span>
        <h1>Knowledge, one question at a time.</h1>
        <p>
          Quiz Master is an interactive quiz application where users can answer
          questions from multiple subjects and test their knowledge. After
          completing the quiz, users can instantly view their results, including
          their score and performance.
        </p>
      </div>
      <div className="feature">
        <span className="feature-number">01</span>
        <h2>A little focus goes a long way.</h2>
        <p>
          Choose a subject, work through each question, and see where you land.
        </p>
      </div>
      <Link to="/Quiz" className="quiz">
        Start Quiz
      </Link>
    </div>
  );
}

export default Home;

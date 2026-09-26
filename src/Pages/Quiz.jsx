import { Link } from "react-router";
import "./Quiz.css";
import { setFilteredQuestion } from "../redux/slice/Quizslice";
import { useDispatch } from "react-redux";

function Quiz() {
  const dispatch = useDispatch();

  return (
    <div className="Quiz">
      <span className="eyebrow">PICK YOUR TRACK</span>
      <h1>What are we solving today?</h1>
      <p className="quiz-intro">Choose a subject to start your quiz.</p>
      <Link
        to="/Quiz/computerquiz/1"
        className="computer"
        onClick={() => {
          localStorage.setItem("questionType", "Computer");
          dispatch(setFilteredQuestion());
        }}
      >
        Computer Interview
      </Link>
      <Link
        to="/Quiz/mathquiz/1"
        className="math"
        onClick={() => {
          localStorage.setItem("questionType", "math");
          dispatch(setFilteredQuestion());
        }}
      >
        Math Interview
      </Link>
    </div>
  );
}

export default Quiz;

import { useNavigate, useParams } from "react-router";
import { useEffect, useMemo } from "react";
import "./Question.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredQuestion,
  setSelectedAnswer,
} from "../redux/slice/Quizslice";

function Question() {
  const quizType = localStorage.getItem("questionType");
  const { id: quizInd } = useParams();
  const dispatch = useDispatch();
  const { filteredQuestion, selectedAnswer } = useSelector(
    (state) => state.quiz,
  );

  useEffect(() => {
    dispatch(setFilteredQuestion());
  }, []);

  const Navigate = useNavigate();
  const QuestionInd = Number(quizInd);

  // for question selected based on type
  const singleQuestion = useMemo(() => {
    return filteredQuestion[quizInd - 1];
  }, [quizInd, filteredQuestion]);

  const whatSelected = useMemo(() => {
    if (singleQuestion) {
      const found = selectedAnswer.find(
        (item) => item.questionId == singleQuestion?.id,
      );
      return found ? found.selectedoption : "";
    }
    return "";
  }, [selectedAnswer, singleQuestion]);

  // For total Question after selected type

  const totalQuestion = filteredQuestion.length;

  //For Previous Question
  const handlePrev = () => {
    if (QuestionInd > 1) {
      Navigate(
        `/Quiz/${quizType === "math" ? "mathquiz" : "computerquiz"}/${QuestionInd - 1}`,
      );
    }
  };

  //For Next Question

  const handlenext = () => {
    if (QuestionInd < totalQuestion) {
      Navigate(
        `/Quiz/${quizType === "math" ? "mathquiz" : "computerquiz"}/${QuestionInd + 1}`,
      );
    }
  };

  //For Submit Question

  const handleSubmit = () => {
    Navigate("/result");
  };

  return (
    <div className="question-container">
      {/* For Question */}

      <div className="question">
        <strong>Question {QuestionInd} : - </strong>
        <strong>{singleQuestion?.Question}</strong>
      </div>

      {/* For Option  */}

      <div className="option">
        <span>
          {singleQuestion?.option.map((option, ind) => {
            return (
              <label key={ind} className="option-select">
                <input
                  type="radio"
                  name="answer"
                  checked={whatSelected === option}
                  value={option}
                  // inchecked={answer === option}
                  onChange={(e) => {
                    dispatch(
                      setSelectedAnswer({
                        answer: e.target.value,
                        questionId: singleQuestion?.id,
                      }),
                    );
                  }}
                />
                {option}
              </label>
            );
          })}
        </span>
      </div>

      {/* For Navigation Button  */}

      <div className="navigate-button">
        {QuestionInd === 1 && <div />}
        {QuestionInd > 1 && <button onClick={handlePrev}>Previous</button>}
        {QuestionInd === totalQuestion ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handlenext}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Question;

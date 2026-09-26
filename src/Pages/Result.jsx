import { useEffect } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredQuestion } from "../redux/slice/Quizslice";
import "./Result.css";

function Result() {
  const dispatch = useDispatch();
  const { filteredQuestion, selectedAnswer } = useSelector(
    (state) => state.quiz,
  );
  const quizType = localStorage.getItem("questionType");

  useEffect(() => {
    if (!filteredQuestion.length) {
      dispatch(setFilteredQuestion());
    }
  }, [dispatch, filteredQuestion.length]);

  const review = filteredQuestion.map((question) => {
    const response = selectedAnswer.find(
      (answer) => answer.questionId === question.id,
    );

    return {
      ...question,
      selectedOption: response?.selectedoption ?? "",
      isCorrect: response?.selectedoption === question.correctAnswer,
    };
  });
  const totalCount = review.length;
  const correctCount = review.filter((item) => item.isCorrect).length;
  const answeredCount = review.filter((item) => item.selectedOption).length;
  const scorePercent = totalCount
    ? Math.round((correctCount / totalCount) * 100)
    : 0;
  const subject = quizType?.toLowerCase() === "math" ? "Math" : "Computer";
  const resultMessage =
    scorePercent >= 80
      ? "Excellent work. You know your stuff."
      : scorePercent >= 50
        ? "Good effort. Keep building on it."
        : "Every attempt is progress. Keep practicing.";

  if (!totalCount) {
    return (
      <main className="result-page result-empty">
        <span className="eyebrow">QUIZ MASTER / RESULTS</span>
        <h1>No quiz results to show yet.</h1>
        <p>Choose a subject and complete a quiz to see your score here.</p>
        <Link className="result-primary-link" to="/Quiz">
          Choose a subject <span aria-hidden="true">-&gt;</span>
        </Link>
      </main>
    );
  }

  return (
    <main className="result-page">
      <header className="result-heading">
        <span className="eyebrow">QUIZ COMPLETE / {subject.toUpperCase()}</span>
        <h1>Here’s how you did.</h1>
        <p>{resultMessage}</p>
      </header>

      <section className="result-summary" aria-label="Quiz score summary">
        <div
          className="score-ring"
          style={{ "--score-progress": `${scorePercent}%` }}
          aria-label={`${scorePercent} percent score`}
        >
          <div className="score-ring-center">
            <strong>{scorePercent}%</strong>
            <span>score</span>
          </div>
        </div>
        <div className="result-stats">
          <span className="result-label">YOUR SCORE</span>
          <h2>
            {correctCount} <span>/ {totalCount}</span>
          </h2>
          <p>correct answers</p>
        </div>
        <div className="result-stats result-answered">
          <span className="result-label">COMPLETION</span>
          <h2>
            {answeredCount} <span>/ {totalCount}</span>
          </h2>
          <p>questions answered</p>
        </div>
      </section>

      <section className="answer-review" aria-labelledby="review-title">
        <div className="review-heading">
          <div>
            <span className="eyebrow">QUESTION BY QUESTION</span>
            <h2 id="review-title">Answer review</h2>
          </div>
          <span className="review-count">{totalCount} QUESTIONS</span>
        </div>
        <div className="review-list">
          {review.map((item, index) => {
            const resultClass = item.isCorrect
              ? "is-correct"
              : item.selectedOption
                ? "is-incorrect"
                : "is-unanswered";
            const resultText = item.isCorrect
              ? "Correct"
              : item.selectedOption
                ? "Review"
                : "Not answered";

            return (
              <article className="review-item" key={item.id}>
                <div className="review-item-heading">
                  <span className="review-question-number">
                    QUESTION {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`review-result ${resultClass}`}>
                    {resultText}
                  </span>
                </div>
                <h3>{item.Question}</h3>
                <div className="answer-comparison">
                  <p>
                    <span>Your answer</span>
                    <strong className={resultClass}>
                      {item.selectedOption || "No answer selected"}
                    </strong>
                  </p>
                  {!item.isCorrect && (
                    <p>
                      <span>Correct answer</span>
                      <strong className="correct-answer">
                        {item.correctAnswer}
                      </strong>
                    </p>
                  )}
                </div>
                {item.explanation && (
                  <p className="answer-explanation">{item.explanation}</p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <footer className="result-actions">
        <Link className="result-primary-link" to="/Quiz">
          Choose another subject <span aria-hidden="true">-&gt;</span>
        </Link>
        <Link className="result-secondary-link" to="/">
          Back to dashboard
        </Link>
      </footer>
    </main>
  );
}

export default Result;

import React, { useEffect, useState } from "react";
import questionJSON from "./Apprentice_TandemFor400_Data";
import Questions from './components/Questions';
import Answers from './components/Answers';
import Score from "./components/Score";
import CorrectAnswer from "./components/CorrectAnswer";

function App() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const mixedQuestions = questionJSON.sort(() => 0.5 - Math.random()).slice(0, 10);

  useEffect(() => {
    setQuestions(mixedQuestions)
  }, []);

  const handleAnswer = (answer) => {
    setCurrentIndex(currentIndex + 1);
    if (!showCorrectAnswer) {
      if (answer === questions[currentIndex].correct) {
        setScore(score + 1);
      }
    }
    setShowCorrectAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowCorrectAnswer(false);
    if (currentIndex >= questions.length) {
      setShowScore(true);
    };
  };

  return showScore ? (
    <Score
      score={score}
    />
  ) : showCorrectAnswer ? (
    <CorrectAnswer
      correctAnswer={questions[currentIndex - 1].correct}
      handleNextQuestion={handleNextQuestion}
    />
  ) : questions.length > 0 ? (
    <div className="container">
      <Questions
        data={questions[currentIndex]}
      />
      <Answers
        data={questions[currentIndex]}
        handleAnswer={handleAnswer}
      />
    </div>

  ) : (<h1 className="text-white font-bold text-2xl">Questions Loading...</h1>
        );
}

export default App;

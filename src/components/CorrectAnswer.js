import React from "react";
import NextQuestionButton from "./NextQuestionButton";


const CorrectAnswer = ({ correctAnswer, handleNextQuestion }) => {

    return (
        <div>
            <div className="grid">
                <h1
                    className="bg-white font-bold p-4 text-gray-900 font-semibold rounded shadow">
                    The Correct Answer is {correctAnswer}!!!
                </h1>
                <NextQuestionButton handleNextQuestion={handleNextQuestion}/>
            </div>
        </div>
    )
};

export default CorrectAnswer;
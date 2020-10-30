import React from "react";


const NextQuestionButton = ({ handleNextQuestion }) => {

    return (
        <div>
            <div className="grid">
                <button
                    className="bg-white p-4 text-gray-900 font-semibold rounded shadow mt-4"
                    onClick={() => handleNextQuestion()}
                    >
                    Next Question!
                </button>
            </div>
        </div>
    )
};

export default NextQuestionButton;
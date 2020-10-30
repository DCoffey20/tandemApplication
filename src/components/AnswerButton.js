import React from "react";


const AnswerButton = ({ handleAnswer, answer }) => {

    return (
        <div>
            <div className="grid">
                <button
                    className="bg-white p-4 text-gray-900 font-semibold rounded shadow"
                    onClick={() => handleAnswer(answer)}>
                    {answer}
                </button>
            </div>
        </div>
    )
};

export default AnswerButton;
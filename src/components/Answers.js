import React from "react";
import AnswerButton from './AnswerButton';


const Answers = ({ handleAnswer, data: { incorrect, correct } }) => {

    const shuffleAnswers = [correct, ...incorrect];
    shuffleAnswers.sort(() => Math.random() - 0.5);


    return (
        <div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {shuffleAnswers.map((answer, key) => (
                    <AnswerButton
                        handleAnswer={handleAnswer}
                        key={key}
                        answer={answer}
                    />
                ))}
            </div>

        </div>
    )
};

export default Answers;
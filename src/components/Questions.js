import React from "react";


const Questions = ({ data: { question } }) => {
    return (
        <div>
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl">
                    {question}
                </h2>
            </div>

        </div>
    )
};

export default Questions;
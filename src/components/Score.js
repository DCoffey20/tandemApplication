import React from "react";


const Score = ({ score }) => {

    return (
        <div>
            <div className="grid">
                <h1
                    className="bg-white font-bold p-4 text-gray-900 font-semibold rounded shadow">
                    ROUND OVER!!! <br></br>
                    Your Score is {score}!!!
                </h1>
            </div>
        </div>
    )
};

export default Score;
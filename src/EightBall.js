import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({answers}) => {
    const [fortune, setFortune] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const chooseAnswer = () => {
        let idx = Math.floor(Math.random() * answers.length);
        let answer = answers[idx];
        setFortune(answer.msg);
        setColor(answer.color);
        console.log(answer);
    }

    return (
        <div className="eightBall" style={{backgroundColor: color}} onClick={chooseAnswer}>
            <p>{fortune}</p>
        </div>
    )
}

export default EightBall;
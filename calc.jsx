import React, { useState } from "react";
import './calc.css';

function Calc() {
    const [result, setResult] = useState("");

    const clickHandler = (event) => {
        setResult(result.concat(event.target.value))
    }
    const clearHandler = () => {
        setResult("")
    }
    const answerHandler = () => {
        setResult(eval(result))
    }

    return (
        <div className="calc">
            <input type='text' placeholder="0" id="ans" className="rslt" value={result} />
            <input type='button' value='C' className="button button1" onClick={clearHandler} />
            <input type='button' value='=' className="button button1" onClick={answerHandler} />
            <input type='button' value='9' className="button" onClick={clickHandler} />
            <input type='button' value='8' className="button" onClick={clickHandler} />
            <input type='button' value='7' className="button" onClick={clickHandler} />
            <input type='button' value='6' className="button" onClick={clickHandler} />
            <input type='button' value='5' className="button" onClick={clickHandler} />
            <input type='button' value='4' className="button" onClick={clickHandler} />
            <input type='button' value='3' className="button" onClick={clickHandler} />
            <input type='button' value='2' className="button" onClick={clickHandler} />
            <input type='button' value='1' className="button" onClick={clickHandler} />
            <input type='button' value='.' className="button" onClick={clickHandler} />
            <input type='button' value='+' className="button" onClick={clickHandler} />
            <input type='button' value='-' className="button" onClick={clickHandler} />
            <input type='button' value='*' className="button" onClick={clickHandler} />
            <input type='button' value='&' className="button" onClick={clickHandler} />
            <input type='button' value='%' className="button" onClick={clickHandler} />
        </div>
    )
}

export default Calc;
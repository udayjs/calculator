// src/Calculator.js
import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  }

  const clearResult = () => {
    setResult('');
  }

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button className="clear" onClick={clearResult}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button></button>
        <button></button>
        <button></button>
        <button className="equal" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;

import React from 'react'

const Buttonbox = ({handleClick}) => {
  return (
    <div className="calculator-btns">
        <button name="1" onClick={handleClick}className="calculator-btn">1</button>
        <button name="2" onClick={handleClick} className="calculator-btn">2</button>
        <button name="3" onClick={handleClick} className="calculator-btn">3</button>
        <button name="/" onClick={handleClick} className="calculator-btn">/</button>
        <button name="4" onClick={handleClick} className="calculator-btn">4</button>
        <button name="5" onClick={handleClick} className="calculator-btn">5</button>
        <button name="6" onClick={handleClick} className="calculator-btn">6</button>
        <button name="-" onClick={handleClick} className="calculator-btn">-</button>
        <button name="7" onClick={handleClick} className="calculator-btn">7</button>
        <button name="8" onClick={handleClick} className="calculator-btn">8</button>
        <button name="9" onClick={handleClick} className="calculator-btn">9</button>
        <button name="+" onClick={handleClick} className="calculator-btn">+</button>
        <button name="." onClick={handleClick} className="calculator-btn">.</button>
        <button name="0" onClick={handleClick} className="calculator-btn">0</button>
        <button name="=" onClick={handleClick} className="equal-btn">=</button>
        <button name="*" onClick={handleClick} className="calculator-btn">*</button>
    </div>
  )
}

export default Buttonbox;
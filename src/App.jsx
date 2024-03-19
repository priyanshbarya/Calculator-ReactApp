import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Buttonbox from "./components/Buttonbox.jsx";

function App() {
  const [result, setResult] = useState("0");
  const handleClick = (e) => {
    const clicked = e.target.name;
    if (clicked === "C") {
      setResult("0");
    } else if (clicked === "=") {
      let expression = result;
      if (expression.includes("--")) {
        expression = expression.replace("--", "+");
      }
      try {
        const resultValue = math.evaluate(expression);
        if (!isNaN(resultValue) && isFinite(resultValue)) {
          setResult(resultValue.toString());
        } else {
          setResult("error");
        }
      } catch (error) {
        setResult("error");
      }
    } else {
      if (result === "0" || result === "error") {
        setResult(clicked);
      } else {
        setResult(result + clicked);
      }
    }
  };

  return (
    <div className="container">
      <div className="calculator-container">
        <div className="calculator-screen">
          <input value={result} type="text" />
          <button name="C" onClick={handleClick}>
            C
          </button>
        </div>
        <Buttonbox handleClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

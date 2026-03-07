import { useState } from "react";

export default function App() {
  const [state, setState] = useState({
    previousNumber: "",
    currentNumber: "0",
    isNewNumber: true,
    operation: null,
  });

  const handleClear = () => {
    console.log("clear");
  };

  const handleOperatorClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(event.currentTarget.textContent);
  };

  const handleNumberClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log(event.currentTarget.textContent);
  };

  return (
    <>
      <article className="calculator">
        <div className="buttons">
          <output>{state.currentNumber}</output>
          <button className="clear" onClick={handleClear}>
            C
          </button>
          <div></div>
          <div></div>
          <button className="operator" onClick={handleOperatorClick}>
            /
          </button>
          <button className="number" onClick={handleNumberClick}>
            7
          </button>
          <button className="number" onClick={handleNumberClick}>
            8
          </button>
          <button className="number" onClick={handleNumberClick}>
            9
          </button>
          <button className="operator" onClick={handleOperatorClick}>
            *
          </button>
          <button className="number" onClick={handleNumberClick}>
            4
          </button>
          <button className="number" onClick={handleNumberClick}>
            5
          </button>
          <button className="number" onClick={handleNumberClick}>
            6
          </button>
          <button className="operator" onClick={handleOperatorClick}>
            -
          </button>
          <button className="number" onClick={handleNumberClick}>
            1
          </button>
          <button className="number" onClick={handleNumberClick}>
            2
          </button>
          <button className="number" onClick={handleNumberClick}>
            3
          </button>
          <button className="operator" onClick={handleOperatorClick}>
            +
          </button>
          <div></div>
          <button className="number" onClick={handleOperatorClick}>
            0
          </button>
          <div></div>
          <button className="result" onClick={handleOperatorClick}>
            =
          </button>
        </div>
      </article>
    </>
  );
}

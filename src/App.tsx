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
    // // 테스트 코드
    // console.log(event.currentTarget.textContent);

    const value = event.currentTarget.value;
    if (state.isNewNumber) {
      setState({
        ...state,
        currentNumber: value,
        isNewNumber: false,
      });
    } else {
      setState({
        ...state,
        currentNumber: state.currentNumber + value,
      });
    }
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
          <button className="number" value="7" onClick={handleNumberClick}>
            7
          </button>
          <button className="number" value="8" onClick={handleNumberClick}>
            8
          </button>
          <button className="number" value="9" onClick={handleNumberClick}>
            9
          </button>
          <button className="operator" onClick={handleOperatorClick}>
            *
          </button>
          <button className="number" value="4" onClick={handleNumberClick}>
            4
          </button>
          <button className="number" value="5" onClick={handleNumberClick}>
            5
          </button>
          <button className="number" value="6" onClick={handleNumberClick}>
            6
          </button>
          <button className="operator" onClick={handleOperatorClick}>
            -
          </button>
          <button className="number" value="1" onClick={handleNumberClick}>
            1
          </button>
          <button className="number" value="2" onClick={handleNumberClick}>
            2
          </button>
          <button className="number" value="3" onClick={handleNumberClick}>
            3
          </button>
          <button className="operator" onClick={handleOperatorClick}>
            +
          </button>
          <div></div>
          <button className="number" value="0" onClick={handleNumberClick}>
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

import { useState } from "react";

interface CalculatorState {
  previousNumber: string;
  currentNumber: string;
  isNewNumber: boolean;
  operation: string | null;
}

export default function App() {
  const [state, setState] = useState<CalculatorState>({
    previousNumber: "",
    currentNumber: "0",
    isNewNumber: true,
    operation: null,
  });

  const handleClear = () => {
    // // 테스트 코드
    // console.log("clear");

    setState({
      previousNumber: "",
      currentNumber: "0",
      isNewNumber: true,
      operation: null,
    });
  };

  const handleOperatorClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // // 테스트 코드
    // console.log(event.currentTarget.textContent);

    const operator = event.currentTarget.value;
    const currentNum = parseInt(state.currentNumber || "0");
    if (state.previousNumber !== "" && state.operation) {
      const previousNum = parseInt(state.previousNumber);
      let result = 0;

      switch (state.operation) {
        case "+":
          result = previousNum + currentNum;
          break;
        case "-":
          result = previousNum - currentNum;
          break;
        case "*":
          result = previousNum * currentNum;
          break;
        case "/":
          result = previousNum / currentNum;
          break;
      }
      if (operator === "=") {
        setState({
          previousNumber: "",
          currentNumber: result.toString(),
          isNewNumber: true,
          operation: null,
        });
      } else {
        setState({
          previousNumber: result.toString(),
          currentNumber: "",
          isNewNumber: true,
          operation: operator,
        });
      }
    } else {
      setState({
        previousNumber: currentNum.toString(),
        currentNumber: "",
        isNewNumber: true,
        operation: operator,
      });
    }
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
          <button className="operator" value="/" onClick={handleOperatorClick}>
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
          <button className="operator" value="*" onClick={handleOperatorClick}>
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
          <button className="operator" value="-" onClick={handleOperatorClick}>
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
          <button className="operator" value="+" onClick={handleOperatorClick}>
            +
          </button>
          <div></div>
          <button className="number" value="0" onClick={handleNumberClick}>
            0
          </button>
          <div></div>
          <button className="result" value="=" onClick={handleOperatorClick}>
            =
          </button>
        </div>
      </article>
    </>
  );
}

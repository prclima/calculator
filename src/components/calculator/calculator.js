import style from "./calculator.module.css";
import { useState } from "react";

function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  function UpdateCalc(value) {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  function Calculate() {
    setCalc(eval(calc).toString());
  }

  function HandleOperator(e) {
    UpdateCalc(e.target.textContent);
  }

  function CreateNumbers() {
    let digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={HandleOperator}>
          {i}
        </button>
      );
    }
    return digits;
  }

  function Del() {
    if (calc == "") {
      return;
    } else {
      let deletedVal = calc.slice(0, -1);
      setCalc(deletedVal);
    }
  }

  return (
    <div className={style.all}>
      <div className={style.calculator}>
        <div className={style.display}>{calc || "0"}</div>

        <div className={style.operators}>
          <button onClick={HandleOperator}>/</button>
          <button onClick={HandleOperator}>*</button>
          <button onClick={HandleOperator}>+</button>
          <button onClick={HandleOperator}>-</button>

          <button onClick={Del}>DEL</button>
          <button
            onClick={() => {
              setCalc("");
            }}
          >
            C
          </button>
        </div>
        <div className={style.numbers}>
          {CreateNumbers()}
          <button onClick={HandleOperator}>0</button>
          <button onClick={HandleOperator}>.</button>
          <button onClick={Calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

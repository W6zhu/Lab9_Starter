let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;

  try {
    if (operator === '/' && Number(secondNum) === 0) {
      throw new Error("Cannot divide by zero");
    }
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (err) {
    console.error("Calculation error:", err);
    output.innerHTML = "Error";
  } finally {
    console.log("Not a Valid Calculation");
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
let timerStarted = false;

errorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    switch (btn.textContent) {
      case "Console Log":
        console.log("This is a console.log message.");
        break;
      case "Console Error":
        console.error("This is a console.error message.");
        break;
      case "Console Count":
        console.count("Count Button Clicked");
        break;
      case "Console Warn":
        console.warn("This is a warning message.");
        break;
      case "Console Assert":
        console.assert(false, "Assertion failed: condition is false.");
        break;
      case "Console Clear":
        console.clear();
        break;
      case "Console Dir":
        console.dir(document.body);
        break;
      case "Console dirxml":
        console.dirxml(document.body);
        break;
      case "Console Group Start":
        console.group("Group Label");
        console.log("Inside group");
        break;
      case "Console Group End":
        console.groupEnd();
        break;
      case "Console Table":
        console.table([{ name: "Hello", number: 358937 }, { name: "Jeff", number: 2321312 }]);
        break;
      case "Start Timer":
        if (!timerStarted) {
          console.time("demoTimer");
          timerStarted = true;
        }
        break;
      case "End Timer":
        if (timerStarted) {
          console.timeEnd("demoTimer");
          timerStarted = false;
        }
        break;
      case "Console Trace":
        function a() { b(); }
        function b() { c(); }
        function c() { console.trace("Trace Button"); }
        a();
        break;
      case "Trigger a Global Error":
        nonExistentFunction();
        break;
    }
  });
});

window.onerror = function (message, source, lineno, colno, error) {
  console.log("Global error caught:");
  console.log(`Message: ${message}`);
  console.log(`Source: ${source}`);
  console.log(`Line: ${lineno}, Column: ${colno}`);
  console.log("Error object:", error);
};

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

document.getElementById("first-num").addEventListener("blur", (e) => {
  const value = e.target.value;
  if (isNaN(value)) {
    try {
      throw new ValidationError("Not valid first num");
    } catch (err) {
      console.error(err.name + ": " + err.message);
    }
  }
});

document.getElementById("second-num").addEventListener("blur", (e) => {
  const value = e.target.value;
  if (isNaN(value)) {
    try {
      throw new ValidationError("Not valid second num");
    } catch (err) {
      console.error(err.name + ": " + err.message);
    }
  }
});
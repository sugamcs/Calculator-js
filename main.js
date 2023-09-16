function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error, You can't divide by zero!";
  }
  return a / b;
}


function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error";
  }
}


const display = document.getElementById("output");
let currentInput = ""; 
let currentOperator = ""; 
let previousValue = null; 

document.querySelectorAll(".digit").forEach((button) => {
  button.addEventListener("click", () => {
    if (currentInput === "0") {
      currentInput = "";
    }
    currentInput += button.textContent;
    display.value = currentInput;
  });
});

document.querySelectorAll(".operation").forEach((button) => {
  button.addEventListener("click", () => {
    if (currentInput !== "") {
      if (previousValue === null) {
        previousValue = parseFloat(currentInput);
      } else {
        previousValue = operate(currentOperator, previousValue, parseFloat(currentInput));
      }
      currentOperator = button.textContent;
      currentInput = "";
      display.value = previousValue;
    }
  });
});

document.getElementById("equals").addEventListener("click", () => {
  if (currentInput !== "") {
    previousValue = operate(currentOperator, previousValue, parseFloat(currentInput));
    display.value = previousValue;
    currentInput = "";
    currentOperator = "";
  }
});

document.querySelector(".clear").addEventListener("click", () => {
  currentInput = "";
  currentOperator = "";
  previousValue = null;
  display.value = "0";
});

document.querySelector(".delete").addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1); // Remove the last character
  if (currentInput === "") {
    currentInput = "0";
  }
  display.value = currentInput;
});

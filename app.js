let firstNumber;
let secondNumber;
let operator;
let result;

function handleOperatorPressed(operatorPressed) {
  firstNumber = parseFloat(output);
  operator = operatorPressed;
  clearScreen();
}

function equal() {
  secondNumber = parseFloat(output);
  if (operator == "+") {
    result = firstNumber + secondNumber;
  } else if (operator == "-") {
    result = firstNumber - secondNumber;
  } else if (operator == "/") {
    result = firstNumber / secondNumber;
    result = result.toFixed(2);
  } else if (operator == "*") {
    result = firstNumber * secondNumber;
  }
  document.getElementById("output").innerHTML = result;
}

let output = "";
document.getElementById("output").innerHTML = output;

function updateOutput(number) {
  if (result != undefined) {
    clearScreen();
    result = undefined;
  }
  output = output.concat(number);
  document.getElementById("output").innerHTML = output;
}

function clearScreen() {
  document.getElementById("output").innerHTML = "";
  output = "";
}

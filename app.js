let firstNumber;
let secondNumber;
let operator;
let result;

function handleOperatorPressed(operatorPressed) {
  firstNumber = parseInt(output);
  operator = operatorPressed;
  clearScreen();
}

function equal() {
  secondNumber = parseInt(output);
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
  output = output.concat(number);
  document.getElementById("output").innerHTML = output;
}

function clearScreen() {
  document.getElementById("output").innerHTML = "";
  output = "";
}

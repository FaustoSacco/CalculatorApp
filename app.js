let firstNumber;
let secondNumber;

function plus() {
  firstNumber = parseInt(output);
  clearScreen();
}

function equal() {
  secondNumber = parseInt(output);
  let result = firstNumber + secondNumber;
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

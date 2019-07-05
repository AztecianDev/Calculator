const display = document.getElementById("display");
const btnNumbers = document.querySelectorAll(".btnNum");
const btnOperators = document.querySelectorAll(".btnOp");

// add operator function
function add(a, b) {
  return a + b;
}

//minus operator function
function minus(a, b) {
  return a - b;
}

//divide operator function
function divide(a, b) {
  return a / b;
}

// times operator function
function multiply(a, b) {
  return a * b;
}

// operate function
// takes in operator numbers and operator name (function name).
function operate(num1, num2, operators) {
  return operators(num1, num2);
}
// console.log(operate(6, 6, add));

// display numbers clicked to display.
function numbersHandler(e) {
  const number = e.target.id; // id of button clicked stored in variable number.
  display.textContent = number;

  console.log(number);
}

// display operators clicked to display.
function operatorsHandler(e) {
  const output = e.target.id;
  display.textContent = output;

  console.log(output);
}

//  eventlistner for numbers clicked.
btnNumbers.forEach(btnNum => btnNum.addEventListener("click", numbersHandler));
// eventlistner for operators.
btnOperators.forEach(btnOp =>
  btnOp.addEventListener("click", operatorsHandler)
);

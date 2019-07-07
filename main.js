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
function operate(operator, num1, num2) {
  if(operator === "+"){
    return add(a,b);
  }else if(operator === "-"){
    return minus(a,b)
  }else if(operator === "*"){
    return multiply(a,b);
  }else if (operator === "/"){
    return divide(a,b);
  }
}

// display numbers clicked to display.
btnNumbers.forEach((btnNum) => {
  btnNum.addEventListener('click',(e) =>{
    let clickedNum = e.target.id;
    displayVal = clickedNum;
    display.textContent = displayVal;
      
  });
});
// eventlistner for operators.
btnOperators.forEach((btnOp) => {
  btnOp.addEventListener('click',(e) =>{
    const clickedOp = e.target.id;
    display.textContent = clickedOp;
  });
});
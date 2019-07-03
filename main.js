const result = document.getElementById("result , p");
const choices = document.querySelectorAll(".choice");


// add function
function add(a, b) {
    return a + b;
}

//minus function
function minus(a, b) {
    return a - b;
}


//divide function
function divide(a, b) {
    return a / b;
}

// times function
function multiply(a, b) {
    return a * b;
}


// operate function
function operate(num1, num2, operators) {

    return operators(num1, num2);

}
// console.log(operate(6, 6, add));
function display(e) {
    const input = e.target.id;
    console.log(input);
}


choices.forEach(choice => choice.addEventListener('click', display));
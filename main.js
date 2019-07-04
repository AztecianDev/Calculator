const result = document.getElementById("result");
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

// display user input as output in display.
let myArr = []; // create array for user input.
function display(e) {
    const input = e.target.id; // id of button clicked stored in variable input.
    result.textContent = myArr; // display text from array on calc display.
    myArr.push(input); // push the input from click to array.
    console.table(myArr);
    
}

//  eventlistner.
choices.forEach(choice => choice.addEventListener('click', display));
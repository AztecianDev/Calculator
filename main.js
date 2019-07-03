const result = document.getElementById("#result");
const choices = document.querySelectorAll(".choice");


// add function
const add = function (a, b) {
    return a + b;
}

//minus function
const minus = function (a, b) {
    return a - b;
}


//divide function
const divide = function (a, b) {
    return a / b;
}

// times function
const multiply = function (a, b) {
    return a * b;
}


// sum function

let operate = function (num1, num2, callback, ) {

    return callback(num1, num2);

}

// console.log(operate(6, 6, multiply));

choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        console.log(e.target.id);
    });
});
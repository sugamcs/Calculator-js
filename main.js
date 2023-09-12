function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){

    return (a/b).toFixed(1)
}

let num1;
let num2;
let operator;


function operate(num1,num2,operator){
    if (operator === '+') {
            return add(num1, num2);
        } else if (operator === '-') {
            return subtract(num1, num2);
        } else if (operator === '*') {
            return multiply(num1, num2);
        } else if (operator === '/') {
            return divide(num1, num2);
        } else {
            throw new Error(`Unsupported operator: ${operator}`);
        }
}


const result = operate(5, 3, '/'); 
console.log(result);



// Create the functions that populate the display when you click the number buttons.
//  You should be storing the ‘display value’ in a variable somewhere for use in the next step.



const digits = document.querySelectorAll('.digit');
function populateDisplay(){
    digits.forEach(digit => {
        digit.addEventListener('click', event => {
            const keyPressed = event.target;
            const displayText = document.querySelector('.display');
            displayText.textContent += keyPressed.textContent        

        })
    })
}
console.log(populateDisplay())
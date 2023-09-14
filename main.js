// operations

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
let displayText;




// Operater Function:

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


const digits = document.querySelectorAll('.digit')
const equals = document.querySelector('#equals');
const operations = document.querySelectorAll('.operation');
const displaySelector = document.querySelector('.display')



function populateDisplay() {
    digits.forEach(digit => {
        digit.addEventListener('click', event => {
            const keyPressed = event.target;
            let displayText = displaySelector.textContent += keyPressed.textContent
            return displayText
            })
        })
    }

      
populateDisplay()


// store the first number and second number that are input into the calculator,
// utilize the operator that the user selects, 
// then operate() on the two numbers when user presses the “=” key.

// i want to store num1 when an operator has been clicked




function storeNumOne() {
    operations.forEach(operation => {
        operation.addEventListener('click', event => {
            let text1 = event.target;
            if (text1.textContent === '+' || text1.textContent === '-' ||text1.textContent === '*'
             ||text1.textContent === '/' ) {
                num1 = parseFloat(displaySelector.textContent); 
                displaySelector.textContent = `${operation.textContent}`
                console.log(num1);
                
// now i want to make display empty while keeping the num1 saved
        
            }
        });
    });
}

function actOnNums(){
    
}




storeNumOne()
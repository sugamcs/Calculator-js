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

// Operater
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



const digits = document.querySelectorAll('.digit');
const equals = document.querySelector('#equals');
const operations = document.querySelectorAll('.operation');



function populateDisplay(){
    digits.forEach(digit => {
        digit.addEventListener('click', event => {
            const keyPressed = event.target;
            const displayText = document.querySelector('.display');
            let text1 = displayText.textContent += keyPressed.textContent;
            if(operations.addEventListener('click',event =>{
                text1 = num1;
                const newDisplayText = displayText.textContent('')
                let text2 = newDisplayText += event.target

            
            
//progress
            


        
        
    
            }))
        }
        })
    })
}
populateDisplay()
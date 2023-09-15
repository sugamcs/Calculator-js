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

//declared variables
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

// queryselectors
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

// function storeNumOne() {
//     operations.forEach(operation => {
//         operation.addEventListener('click', event => {
//             let text1 = event.target;
//             if (e.target === '+' || text1.textContent === '-' ||text1.textContent === '*'
//              ||e.target === '/' ) {
                // num1 = parseFloat(displaySelector.textContent); 
//                 displaySelector.textContent = ""
//                 console.log(num1);
                        
//             }
//         });
//     });
// }


digits.forEach(digit => {
    digit.addEventListener("click", e => {
        if (operator === "") { // Read first digit if no operator set yet
            num1 += e.target.innerText;
        } else if(e.target === '+' || e.target === '-' || e.target === '*'
             ||e.target === '/' ) { // Read second digit
            let newKeyPressed = e.target
            displaySelector.textContent = ""
            let newDisplayText = displaySelector.textContent += newKeyPressed
            num2 = newDisplayText
            return num2
        }
    });
});

operations.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") { // If the operator is not equals
            operator = e.target.innerText;
            num1 = parseFloat(displaySelector.textContent); 
            displaySelector.textContent = ""
            console.log(num1); // Print the first digit
            console.log(operator); // Print the operator
            let newKeyPressed = e.target
            displaySelector.textContent = ""
            let newDisplayText = displaySelector.textContent += newKeyPressed.textContent
            num2 = newDisplayText.textContent
            console.log(num2)
           
          } else { // If equals button clicked
            console.log(num2); // Print 2nd digit

            switch (operator) { // Calculate and print output
                case "+":
                    console.log(parseInt(num1) + parseInt(num2));
                    break;

                case "-":
                    console.log(parseInt(num1) - parseInt(num2));
                    break;

                // etc...

                default:
                    break;
            }
        }
    })
})






    





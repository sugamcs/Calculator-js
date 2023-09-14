const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operation');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const displayText = document.querySelector('.display');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let currentInput = '';
let calculationInProgress = false;

// Helper function to perform basic operations
function operate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return 'Error: Divide by zero';
            return a / b;
        default:
            return 'Error: Invalid operator';
    }
}

// Update display function
function updateDisplay() {
    if (calculationInProgress) {
        displayText.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
    } else {
        displayText.textContent = firstNumber;
    }
}

// Event listener for digit buttons
digits.forEach(digit => {
    digit.addEventListener('click', event => {
        const keyPressed = event.target.textContent;
        if (operator === '') {
            currentInput += keyPressed;
        } else {
            currentInput = keyPressed;
        }
        if (calculationInProgress) {
            secondNumber = currentInput;
        } else {
            firstNumber = currentInput;
        }
        updateDisplay();
    });
});

// Event listener for operator buttons
operators.forEach(opBtn => {
    opBtn.addEventListener('click', event => {
        if (currentInput !== '') {
            if (firstNumber === '') {
                firstNumber = currentInput;
            } else if (operator !== '') {
                firstNumber = operate(firstNumber, secondNumber, operator)
                secondNumber = '';
            }
            operator = event.target.textContent;
            currentInput = '';
            calculationInProgress = true;
            updateDisplay();
        }
    });
});

// Event listener for clear button
clearButton.addEventListener('click', () => {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    currentInput = '';
    calculationInProgress = false;
    displayText.textContent = '';
});

// Event listener for equals button
equalsButton.addEventListener('click', () => {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        const result = operate(firstNumber, secondNumber, operator);
        if (result === 'Error: Divide by zero' || result === 'Error: Invalid operator') {
            displayText.textContent = result.toString();
        } else {
            firstNumber = result.toString();
            operator = '';
            secondNumber = '';
            currentInput = '';
            calculationInProgress = false;
            displayText.textContent = firstNumber;
        }
    }
});

// Event listener for delete button
function deleteChar() {
    const deleteBtn = document.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        // Get the current display text
        let currentDisplay = displayText.textContent;
        if (currentDisplay.length > 0) {
            // Remove the last character
            currentDisplay = currentDisplay.slice(0, -1);
            // Update the display
            displayText.textContent = currentDisplay;
        }
    });
}

deleteChar();

function updateDisplay() {
    result.innerText = currentInput;
}

let currentInput = '0';
let operator = '';
let prevInput = '0';

const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;
        
        switch (buttonText) {
            case 'AL':
                currentInput = '0';
                operator = '';
                prevInput = '0';
                break;
            case '+':
            case '-':
            case '*':
            case 'x':
            case 'X':
            case '/':
                if (operator === '') {
                    prevInput = currentInput;
                    currentInput = '0';
                } else {
                    prevInput = operate(prevInput, currentInput, operator);
                    currentInput = '0';
                }
                operator = buttonText;
                break;
            case '=':
                if (operator !== '') {
                    currentInput = operate(prevInput, currentInput, operator);
                    operator = '';
                }
                break;
            default:
                if (currentInput === '0') {
                    currentInput = buttonText;
                } else {
                    currentInput += buttonText;
                }
                break;
        }
        
        updateDisplay();
    });
});

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
        case 'x':
        case 'X':
            return (a * b).toString();
        case '/':
            return (b !== 0) ? (a / b).toString() : 'Error';
    }
}

updateDisplay();

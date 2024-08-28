const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.dataset.value;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.innerText = '0';
        } else if (value === '=') {
            if (previousInput && currentInput) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                display.innerText = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});

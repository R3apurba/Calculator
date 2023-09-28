let currentInput = '';
let equation = '';
const display = document.getElementById('user_input');

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            equation += value;
        } else if (value === 'C') {
            currentInput = equation = '';
        } else if (value === '←') {
            currentInput = currentInput.slice(0, -1);
            equation = equation.slice(0, -1);
        } else if (value === '=') {
            if (currentInput) {
                equation = evaluateEquation(equation);
                currentInput = equation;
            }
        } else if (currentInput && !isNaN(currentInput[currentInput.length - 1])) {
            equation += value;
            currentInput = '';
        }

        display.value = equation;
    });
});

function evaluateEquation(equation) {
    try {
        return eval(equation);
    } catch (error) {
        return 'Error';
    }
}
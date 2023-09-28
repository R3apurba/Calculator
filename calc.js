const display = document.getElementById('user_input');

document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        const currentValue = display.value;

        if (!isNaN(value) || value === '.') {
            display.value = currentValue + value;
        } else if (value === 'C') {
            display.value = '';
        } else if (value === '←') {
            display.value = currentValue.slice(0, -1);
        } else if (value === '=') {
            if (currentValue) {
                display.value = evaluateEquation(currentValue);
            }
        } else if (currentValue && !isNaN(currentValue[currentValue.length - 1])) {
            display.value = currentValue + value;
        }
    });
});

function evaluateEquation(equation) {
    try {
        return eval(equation);
    } catch (error) {
        return 'Error';
    }
}

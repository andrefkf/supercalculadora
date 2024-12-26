const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function appendOperator(operator) {
    if (display.value === '' || isNaN(display.value.slice(-1))) return;
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    }
}

function startPowerCalculation() {
    try {
        baseValue = parseFloat(display.value);
        if (isNaN(baseValue)) throw 'Invalid base';
        display.value = ''; 
    } catch (error) {
            display.value = 'Error';
    }
}

function calculatePower() {
    try {
        const exponent = parseFloat(display.value);
        if (baseValue === null || isNaN(exponent)) throw 'Invalid input';
            display.value = Math.pow(baseValue, exponent);
            baseValue = null;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateAverage() {
    const values = display.value.split(',').map(Number);
    if (values.every(v => !isNaN(v))) {
        const sum = values.reduce((a, b) => a + b, 0);
        display.value = sum / values.length;
    } else {
        display.value = 'Error';
    }
}

function calculateLogarithm() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateFactorial() {
    try {
        const number = parseInt(display.value);
        if (number < 0 || isNaN(number)) throw 'Invalid input';
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        display.value = factorial;
        } catch (error) {
            display.value = 'Error';
        }
}

function calculateSin() {
    try {
        display.value = Math.sin(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCos() {
    try {
        display.value = Math.cos(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateTan() {
    try {
        display.value = Math.tan(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateExponential() {
    try {
        display.value = Math.exp(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateNaturalLog() {
    try {
        display.value = Math.log(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
    baseValue = null;
}

function toggleAdvancedMenu() {
    advancedMenu.classList.toggle('open');
}
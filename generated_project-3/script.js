// Simple Calculator Logic and UI Interaction
// -------------------------------------------------
// This script defines a Calculator class handling basic arithmetic operations,
// wires the UI buttons, and adds keyboard support.

// Calculator class definition
class Calculator {
  constructor() {
    // The current number being entered/displayed as a string
    this.currentInput = '';
    // The stored previous numeric value (as a number)
    this.previousValue = null;
    // Current operator (+, -, *, /) or null if none selected
    this.operator = null;
    // Flag indicating the display should be cleared before the next number input
    this.shouldResetDisplay = false;
  }

  // Append a digit or decimal point to the current input
  appendNumber(num) {
    // If we need to start a fresh number, reset the current input first
    if (this.shouldResetDisplay) {
      this.currentInput = '';
      this.shouldResetDisplay = false;
    }

    // Prevent multiple decimal points
    if (num === '.' && this.currentInput.includes('.')) return;

    // Allow a leading decimal point (e.g., ".5" → "0.5")
    if (this.currentInput === '' && num === '.') {
      this.currentInput = '0.';
      return;
    }

    this.currentInput += num;
  }

  // Choose an operator (+, -, *, /)
  chooseOperator(op) {
    // If there is already an operator pending and we have a previous value,
    // compute the intermediate result first.
    if (this.operator && this.previousValue !== null && this.currentInput !== '') {
      this.compute();
    }

    // Store the operator and move the current input to previousValue
    this.operator = op;
    // If there is a current input, use it as the previous value; otherwise keep the existing one
    if (this.currentInput !== '') {
      this.previousValue = parseFloat(this.currentInput);
    }
    this.shouldResetDisplay = true;
  }

  // Perform the calculation based on the stored operator
  compute() {
    if (!this.operator || this.previousValue === null || this.currentInput === '') {
      return;
    }

    const current = parseFloat(this.currentInput);
    let result;

    switch (this.operator) {
      case '+':
        result = this.previousValue + current;
        break;
      case '-':
        result = this.previousValue - current;
        break;
      case '*':
        result = this.previousValue * current;
        break;
      case '/':
        if (current === 0) {
          result = 'Error'; // Division by zero
        } else {
          result = this.previousValue / current;
        }
        break;
      default:
        return;
    }

    // Store result as the new current input for further chaining
    this.currentInput = typeof result === 'number' ? result.toString() : result;
    // Reset operator/previous value – the user can continue with the result
    this.operator = null;
    this.previousValue = null;
    this.shouldResetDisplay = true;
    return result;
  }

  // Reset the calculator to its initial state
  clear() {
    this.currentInput = '';
    this.previousValue = null;
    this.operator = null;
    this.shouldResetDisplay = false;
  }

  // Get the value that should be shown on the display
  getDisplayValue() {
    return this.currentInput === '' ? '0' : this.currentInput;
  }
}

// Instantiate the calculator
const calculator = new Calculator();

// -------------------------------------------------
// UI Wiring
// -------------------------------------------------
const display = document.getElementById('display');
const keys = document.querySelectorAll('.key');

function updateDisplay() {
  display.textContent = calculator.getDisplayValue();
}

keys.forEach((key) => {
  key.addEventListener('click', () => {
    const value = key.dataset.value;
    const operator = key.dataset.operator;
    const action = key.dataset.action;

    if (value !== undefined) {
      calculator.appendNumber(value);
    } else if (operator !== undefined) {
      calculator.chooseOperator(operator);
    } else if (action === 'clear') {
      calculator.clear();
    } else if (action === 'equals') {
      calculator.compute();
      // After showing the result, the next number entry should start fresh
      calculator.shouldResetDisplay = true;
    }
    updateDisplay();
  });
});

// -------------------------------------------------
// Keyboard Support
// -------------------------------------------------
document.addEventListener('keydown', (e) => {
  const key = e.key;

  // Numbers and decimal point
  if ((key >= '0' && key <= '9') || key === '.') {
    e.preventDefault(); // Prevent scrolling when using space/arrow keys elsewhere
    calculator.appendNumber(key);
    updateDisplay();
    return;
  }

  // Operators
  if (['+', '-', '*', '/'].includes(key)) {
    e.preventDefault();
    calculator.chooseOperator(key);
    updateDisplay();
    return;
  }

  // Equals / Enter
  if (key === 'Enter' || key === '=') {
    e.preventDefault();
    calculator.compute();
    calculator.shouldResetDisplay = true;
    updateDisplay();
    return;
  }

  // Clear (Backspace or Delete)
  if (key === 'Backspace' || key === 'Delete') {
    e.preventDefault();
    calculator.clear();
    updateDisplay();
    return;
  }
});

// Expose Calculator for testing/debugging
window.Calculator = Calculator;

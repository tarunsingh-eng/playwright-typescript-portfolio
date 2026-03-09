function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

const calculator = {
  add,
  subtract,
  multiply,
  divide
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = calculator;
}

if (typeof window !== 'undefined') {
  window.calc = calculator;
}

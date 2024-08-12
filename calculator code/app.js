let displayValue = '';

function appendNumber(numm) {
  displayValue += numm;
  document.getElementById('display').value = displayValue;
}

function appendOperator(op) {
  if (displayValue !== '') {
    displayValue += op;
    document.getElementById('display').value = displayValue;
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  if (displayValue !== '') {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString()
  }
}

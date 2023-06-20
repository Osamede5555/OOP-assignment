class Calculator {
  constructor() {
    this.result = document.getElementById('result');
    this.clear();
  }

  clear() {
    this.currentValue = null;
    this.operator = null;
    this.result.value = '0';
  }

  numberClick(number) {
    if (this.currentValue === null) {
      this.currentValue = number.toString();
    } else {
      this.currentValue += number.toString();
    }
    this.result.value = this.currentValue;
  }

  operatorClick(operator) {
    if (this.currentValue !== null) {
      this.calculate();
    }
    this.operator = operator;
  }

  calculate() {
    const currentValue = parseFloat(this.currentValue);
    const previousValue = parseFloat(this.result.value);

    let result;
    switch (this.operator) {
      case '+':
        result = previousValue + currentValue;
        break;
      case '-':
        result = previousValue - currentValue;
        break;
      case '*':
        result = previousValue * currentValue;
        break;
      case '/':
        result = previousValue / currentValue;
        break;
    }

    this.result.value = result;
    this.currentValue = null;
  }
}

// Create an instance of the Calculator class
const calculator = new Calculator();

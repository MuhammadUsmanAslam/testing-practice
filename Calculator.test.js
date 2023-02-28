const Calculator = require("./Calculator");

const calculator = new Calculator(1, 2);

describe('my calculator', () => {
    test('Sum two Numbers', () => {
      expect(calculator.add()).toBe(3);
    });
  
    test('Substract two Numbers', () => {
      expect(calculator.subtract()).toBe(-1);
    });

    test('Multiply two Numbers', () => {
        expect(calculator.multiply()).toBe(2);
    });

    test('Divide two Numbers', () => {
        expect(calculator.divide()).toBe(0.5);
    });

  });
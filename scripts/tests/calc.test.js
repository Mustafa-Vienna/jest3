const addition = require('../calc');

describe('Calculator', () => {
  describe('Addition function', () => {
    test('should return 42 for 20 + 22', () => {
      expect(addition(20, 22)).toBe(42);
    });
    test('should return 53 for 31 + 22', () => {
      expect(addition(31, 22)).toBe(53);
    });
  });

  describe('Subtraction function', () => {});

  describe('Multiply function', () => {});

  describe('Division function', () => {});
});

test('adds 20 + 22 to equal 92', () => {
  expect(addition(40, 52)).toEqual(92);
});

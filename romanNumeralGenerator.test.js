const RomanNumeralGenerator = require("./romanNumeralGenerator");

test("Should instantiate a RomanNumeralGenerator object with the arguement passed as the number parameter", () => {
  expect(new RomanNumeralGenerator(5).number).toEqual(5);
});

test("Should be prompted to enter a number if the input is not a number e.g. !@$£", () => {
  expect(new RomanNumeralGenerator("!@$£").convertToRoman()).toEqual(
    "Please enter a valid number"
  );
});

test("Should convert integer to roman numeral e.g. 66 to LXVI", () => {
  expect(new RomanNumeralGenerator(66).convertToRoman()).toEqual("LXVI");
});

test("Should convert integer to roman numeral e.g. 1042 to MXLII", () => {
  expect(new RomanNumeralGenerator(1042).convertToRoman()).toEqual("MXLII");
});

test("Should convert string integer to roman numeral", () => {
  expect(new RomanNumeralGenerator("100").number).toBe(100);
});

test("Should not convert number bigger than 3999", () => {
  expect(new RomanNumeralGenerator(4000).convertToRoman()).toEqual(
    "Number must be between 1 and 3999"
  );
});

test("Should not convert number smaller than 1", () => {
  expect(new RomanNumeralGenerator(0).convertToRoman()).toEqual(
    "Number must be between 1 and 3999"
  );
});

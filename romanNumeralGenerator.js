// Roman pairs needed to perform conversion
const romanPairs = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
];

class RomanNumeralGenerator {
  constructor(number) {
    // Convert string number to number
    this.number = parseInt(number);
  }

  convertToRoman() {
    // Check if a valid number has been entered and the number is between 1 - 3999
    if (isNaN(this.number)) {
      return "Please enter a valid number";
    } else if (this.number > 3999 || this.number < 1) {
      return "Number must be between 1 and 3999";
    }

    let numberToConvert = this.number;
    let romanResult = "";

    // Loop through romanPairs from biggest to smallest, subtracting from numberToConvert every time a value is used until numberToConvert is 0
    for (let i = 0; i < romanPairs.length; i++) {
      while (numberToConvert >= romanPairs[i][0]) {
        romanResult += romanPairs[i][1];
        numberToConvert -= romanPairs[i][0];
      }
    }
    return romanResult;
  }
}

module.exports = RomanNumeralGenerator;

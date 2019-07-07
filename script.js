const input = document.querySelector("input");
const submit = document.querySelector("button");
const result = document.querySelector("h2");

// When button is clicked, the number entered will be converted to a roman numeral
submit.addEventListener("click", function() {
  const numberInput = new RomanNumeralGenerator(input.value);
  const romanNumeral = numberInput.convertToRoman();
  result.innerHTML = romanNumeral;
});

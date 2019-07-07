# Roman Numeral Generator

When passed a number or string number, a roman numeral will be returned.

When in the root directory, in the terminal, run `npm install` to install dependencies required.
Open index.html to start converting numbers to roman numerals.
To run the tests, run `npm test` in the root directory of the project.

# Approach

I created a class in JavaScript to complete this task but didn't implement an interface since JavaScript doesn't use interfaces like PHP or Java.

I focused completing the task by using a TDD approach that uses the JavaScript testing framework Jest. I thought that by using a TDD approach, I can identify the sceanarios before making the actual code to perform the conversion. This ensures that before coding, I understand the requirements fully as a test case with pseudo code will be written beforehand.

After the test cases were written, I started writing the validation code first which will reject inputs which are not numbers and are not between 1 - 3999.
Then, I proceeded to write the code to make the actual conversion which involves 2 loops which will check the roman numeral pairs from the biggest to largest.

Finally, after writing all functionality of the code and running it against the test cases and passing, I made a simple frontend using html.

# Assumptions

Node.js will be installed on the users computer.

# Caveats

Only supports numbers between 1 - 3999

When the input is a string with a number it will convert the string into a number

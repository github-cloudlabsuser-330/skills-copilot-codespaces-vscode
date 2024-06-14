// Calculator constructor function
function Calculator() {
    this.result = 0;
}

// Addition method
Calculator.prototype.add = function(num) {
    this.result += num;
};

// Subtraction method
Calculator.prototype.subtract = function(num) {
    this.result -= num;
};

// Multiplication method
Calculator.prototype.multiply = function(num) {
    this.result *= num;
};

// Division method
Calculator.prototype.divide = function(num) {
    if (num !== 0) {
        this.result /= num;
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
};

// Create a new calculator object
const calculator = new Calculator();

// Perform calculations
calculator.add(5);
calculator.subtract(2);
calculator.multiply(3);
calculator.divide(4);

// Print the result
console.log("Result:", calculator.result);

// Create a new calculator object
//const calculator = new Calculator();

// Ask the user for the first number
let num1 = parseFloat(prompt("Enter the first number:"));

// Ask the user for the operation
let operation = prompt("Enter the operation (add, subtract, multiply, divide):");

// Ask the user for the second number
let num2 = parseFloat(prompt("Enter the second number:"));

// Perform the operation
switch(operation) {
    case "add":
        calculator.add(num1);
        calculator.add(num2);
        break;
    case "subtract":
        calculator.add(num1);
        calculator.subtract(num2);
        break;
    case "multiply":
        calculator.add(num1);
        calculator.multiply(num2);
        break;
    case "divide":
        if (num2 !== 0) {
            calculator.add(num1);
            calculator.divide(num2);
        } else {
            alert("Error: Division by zero is not allowed.");
            return;
        }
        break;
    default:
        alert("Error: Invalid operation.");
        return;
}

// Show the result
alert("Result: " + calculator.result);
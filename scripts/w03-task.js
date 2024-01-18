/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
  return number1 - number2;
}

function subtractNumbers() {
  let number1 = Number(document.querySelector("#subtract1").value);
  let number2 = Number(document.querySelector("#subtract2").value);

  document.querySelector("#difference").value = subtract(number1, number2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
  return number1 * number2;
}

const multiplyNumbers = () => {
  let number1 = Number(document.querySelector("#factor1").value);
  let number2 = Number(document.querySelector("#factor2").value);

  document.querySelector("#product").value = multiply(number1, number2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
  return number1 / number2;
}

const divideNumbers = () => {
  let number1 = Number(document.querySelector("#dividend").value);
  let number2 = Number(document.querySelector("#divisor").value);

  document.querySelector("#quotient").value = divide(number1, number2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", () => {
  let subtotal = Number(document.querySelector("#subtotal").value);
  const isMember = document.querySelector("#member").checked;
  if (isMember) {
    const discount = 15;
    subtotal *= (100 - discount) / 100;
  }
  document.querySelector("#total").textContent = `$${subtotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [...Array(14).keys()].slice(1);
document.querySelector("#array").textContent = `[${numbersArray}]`;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(item => item % 2 !== 0);
document.querySelector("#odds").textContent = `[${oddNumbers}]`;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(item => item % 2 === 0);
document.querySelector("#evens").textContent = `[${evenNumbers}]`;

/* Output Sum of Org. Array */
const sum = numbersArray.reduce((sum, item) => sum + item);
document.querySelector("#sumOfArray").textContent = sum;

/* Output Multiplied by 2 Array */
const multiplied = numbersArray.map(item => item * 2);
document.querySelector("#multiplied").textContent = `[${multiplied}]`;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(item => item * 2).reduce((sum, item) => sum + item);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;
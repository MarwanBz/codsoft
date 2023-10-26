// Constants
const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const divideButton = document.getElementById("divide");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const multiplyButton = document.getElementById("multiply");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const subtractButton = document.getElementById("subtract");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const addButton = document.getElementById("add");
const zeroButton = document.getElementById("zero");
const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("equals");

// Functions
function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Event Listeners
clearButton.addEventListener("click", clearDisplay);
backspaceButton.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

// Add event listeners for number and operator buttons
const numButtons = [
  zeroButton,
  oneButton,
  twoButton,
  threeButton,
  fourButton,
  fiveButton,
  sixButton,
  sevenButton,
  eightButton,
  nineButton,
];
numButtons.forEach((button) => {
  button.addEventListener("click", () => addToDisplay(button.textContent));
});

const operatorButtons = [
  addButton,
  subtractButton,
  multiplyButton,
  divideButton,
];
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => addToDisplay(button.textContent));
});

decimalButton.addEventListener("click", () => {
  if (!display.value.includes(".")) {
    addToDisplay(".");
  }
});

equalsButton.addEventListener("click", calculateResult);

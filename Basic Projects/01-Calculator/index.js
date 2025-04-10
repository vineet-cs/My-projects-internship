let display = document.getElementById('display');
let memory = 0;

function append(character) {
  display.value += character;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let expression = display.value.replace(/sqrt\(/g, 'Math.sqrt(');
    let result = eval(expression);
    if (!isFinite(result)) throw 'Math error';
    display.value = result;
  } catch (e) {
    display.value = 'Error';
  }
}

function memoryAdd() {
  try {
    memory += parseFloat(display.value) || 0;
  } catch {}
}

function memorySubtract() {
  try {
    memory -= parseFloat(display.value) || 0;
  } catch {}
}

function memoryRecall() {
  display.value = memory;
}

function memoryClear() {
  memory = 0;
}
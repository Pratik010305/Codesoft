let memory = 0;

function clearScreen() {
  document.getElementById("screen").value = "";
}

function appendToScreen(value) {
  document.getElementById("screen").value += value;
}

function calculateResult() {
  let expression = document.getElementById("screen").value;
  try {
    // Use eval to compute the result, but be careful with this in production
    document.getElementById("screen").value = eval(expression);
  } catch (e) {
    document.getElementById("screen").value = "Error";
  }
}

function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  document.getElementById("screen").value = memory;
}

function memoryAdd() {
  memory += parseFloat(document.getElementById("screen").value) || 0;
}

function memorySubtract() {
  memory -= parseFloat(document.getElementById("screen").value) || 0;
}

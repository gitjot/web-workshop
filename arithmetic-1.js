// Attach a handler to the Add button
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", performAddition);

// Attach a handler to the Subtract button
document.getElementById("sub").addEventListener("click", performSubtraction);

// Add two numbers
function performAddition() {
  // Retrieve the field handles
  const num1Field = document.getElementById("n1");
  const num2Field = document.getElementById("n2");
  
  // calculate the result
  const ans = Number(num1Field.value) + Number(num2Field.value);
  
  // display the result
  const resField = document.getElementById("result");
  resField.value = ans;
}

// Subtract two numbers
function performSubtraction() {
  // Calculate the answer in one step
  const ans = Number(document.getElementById("n1").value) -
              Number(document.getElementById("n2").value);
  
  // display the result in one step
  document.getElementById("result").value = ans;
}

// NEXT STEP: 
// Add 2 buttons - Multiplty/Divide
// Add a radio button option to choose operation

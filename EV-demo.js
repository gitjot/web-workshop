// Attach a handler to the Time button
const addBtn = document.getElementById("time");
addBtn.addEventListener("click", displayMessage);



// Display the time
function displayMessage() {
    alert( "Hello World!" );
}

// This should be avoided:
function myFunction() {
  document.write("Hello World!");
}

// EXPERIMENT:
// Instead of ... addBtn.addEventListener("click", dispTime);
// try any of the following ....
// addBtn.addEventListener("dblclick", dispTime);
// addBtn.addEventListener("mousedown", dispTime);
// addBtn.addEventListener("mouseover", dispTime);

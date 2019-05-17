/*
// Get all the paragraphs
let paraElems = document.getElementsByTagName("p");
//console.log(paraElems.length);  
for (let i=0; i<paraElems.length; i++) {
    console.log(paraElems[i].innerHTML); // textContent works too
    console.log("Hi");
} // for

*/

const timeBtn = document.getElementById("time"); // Retrieve the time button
timeBtn.addEventListener("click", dispTime); // Attach a handler to the time button

// Handler for t
function dispTime() {
    document.getElementById("demo").textContent = Date();
}




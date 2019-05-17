// Attach a handler to the Time button
const addBtn = document.getElementById("time");
addBtn.addEventListener("click", dispTime);

function dispTime() {
  let msg;
  const time = new Date().getHours();
  if (time < 6) {
    msg = "Go to bed!";
  } else if (time < 12) {
    msg = "Good morning";
  } else if (time < 18) {
    msg = "Good day";
  } else {
    msg = "Good evening";
  }
  
  document.getElementById("demo").innerHTML = msg;
}

// TO DO
// Change message to display the Month in words
// Change message to refer to season and special occassions e.g. Christmas, Paddy's Day, Halloween etc
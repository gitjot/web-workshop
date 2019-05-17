// Attach a handler to the Time button
const addBtn = document.getElementById("time");
addBtn.addEventListener("click", dispTime);


// Display the time
function dispTime() {
   let dateTimeStr = Date();
   document.getElementById("demo").innerHTML = dateTimeStr;

   // Add the time as the last child of the div section 
   let divElem = document.getElementById("time-div");
   //let bodyElem = document.getElementById("body-id");
   let newPara = document.createElement("p");
   newPara.innerHTML  = dateTimeStr;
   divElem.appendChild(newPara);

  
} // end dispTime


/*    

    let strs = [ "Milk", "Bread", "Butter", "Crisps" ];

    let unorderedList = document.createElement("ul");
    for (let i in strs) {

      let listItem = document.createElement("li");
      //anchor.innerText = strs[i];
      listItem.textContent = strs[i];
      unorderedList.appendChild(listItem);
    }

    bodyElem.appendChild(unorderedList);
*/

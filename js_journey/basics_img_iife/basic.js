// try doing it using unobtrsuive event binding
// e.g. lets NOT bind the onclick attribute of the button
// instead it will look for any button click EVENT to trigger


// regular function as before
function findfood() {
  
  // get the value of whats inside choice
  // auto convert it to lower case that makes the conditional processing below robust
  var tmp = document.getElementById("choice").value.toLowerCase();
  
  if (tmp === "pizza") {
    document.getElementById("menudisp").src = 'pizza.png';
  } else if (tmp === "fries") {
    document.getElementById("menudisp").src = 'fries.jpg';
  } else if (tmp == "") {
    alert('Enter an item and I will look for it!'); 
  } else {
    alert('I did not find your item!');
  }
}

// unobtrsuive event binding
// this will only work for the first button defined apparently
document.querySelector("button").addEventListener("click", findfood);

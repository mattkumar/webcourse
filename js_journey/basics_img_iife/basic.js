// try doing it using unobtrsuive event binding
// e.g. lets NOT bind the onclick attribute of the button
// instead it will look for any button click EVENT to trigger


// regular function as before
function findfood() {
  
  // get the value of whats inside choice
  // auto convert it to lower case that makes the conditional processing below robust
  var tmp = document.getElementById("choice").value.toLowerCase();
  
  // ifelse block
  /*if (tmp === "pizza") {
    document.getElementById("menudisp").src = 'pizza.png';
  } else if (tmp === "fries") {
    document.getElementById("menudisp").src = 'fries.jpg';
  } else if (tmp == "") {
    alert('Enter an item and I will look for it!'); 
  } else {
    alert('I did not find your item!');
  }*/
  
  // try again using switch
  switch(tmp) {
    
    case "pizza1":
      document.getElementById("menudisp").src = 'pizza.png';
      break;
    
    case "fries":
      document.getElementById("menudisp").src = 'fries.jpg';
      break;
      
    case "":
      alert('Enter an item and I will look for it!');
      break;
      
    default:
      alert('I did not find your item!');
      break;
    
  }
  
  
}

 
function valid() {

  var x = document.forms["myForm"]["fname"].value;
  if(x="") {
    alert("common");
    return false;
  }
}

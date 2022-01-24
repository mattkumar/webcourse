// basic approach - two buttons
function fries() {
  // this function does two things
  
  // 1: update some text
  document.getElementById("imagedesc").innerHTML = '<strong>Fries are okay</strong>';
  
  // 2: update the image by using the .src
  document.getElementById("mainimage").src = 'fries.jpg';
}

function pizza() {
  // this function does two things
  
  // 1: update some text
  document.getElementById("imagedesc").innerHTML = '<strong>Pizza is the besttt</strong>';
  
  // 2: update the image by using the .src
  document.getElementById("mainimage").src = 'pizza.png';
}

 
 
// adv approach - one button, condition checking
function findfood(input) {
  
  // get the value of whats inside choice
  // auto convert it to lower case that makes the conditional processing below robust
  var tmp = document.getElementById("choice").value.toLowerCase();
  
  
  if (tmp === "pizza") {
    document.getElementById("menudisp").src = 'pizza.png';
  } else if (tmp === "fries") {
    document.getElementById("menudisp").src = 'fries.jpg';
  } else if (tmp == "") {
    alert('enter an item and i will look!'); 
  } else {
    alert('did not find it sorry');
  }
}
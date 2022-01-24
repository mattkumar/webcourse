function change() {
  // this function does two things
  
  // 1: show an alert message
  alert("You clicked me!");
  
  // 2: when the button is clicked, whatever element that has "mytext" as it's id, it's inner HTML is changed
  document.getElementById("mytext").innerHTML = '<strong>some new text here</strong>';
}

 
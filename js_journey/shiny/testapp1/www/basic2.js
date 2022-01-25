function change() {
  // this function does two things
  
  // 1: show an alert message
  alert("You clicked me!");
  
  // 2: when the button is clicked, whatever element that has "mytext" as it's id, it's inner HTML is changed
  document.getElementById("mytarget").innerHTML = '<br><strong>You clicked a shiny button, and JS provided this text!</strong>';
}


function num() {

  var1 = document.getElementById("mynumber").value;
  var1 = Number(var1);
  
  dif = 'The number you entered was '+ var1 + '.' + ' That number divided by 2 is ' + var1 / 2 + '.';
  return document.getElementById("numtarget").innerHTML = dif;
}

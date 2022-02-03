// for loop
var text = "";
var i = 0;

for (i = 1; i < 15; i++) {
  
  text += "The number is" + i + "<br>"
  
}

document.getElementById("forloop").innerHTML = text;


// do while
var text2 = ""
var j = 0;

do{
  text2+="<br>the number is" + j;
  j++;
} 
while (j<10);

document.getElementById("dowhile").innerHTML = text2;

// for loop, increment everytwo
var text3 = "";
var z = 0;

for (z = 1; z < 21; z = z) {
  
  text3 += "The number is" + z + "<br>"
  
}

document.getElementById("everytwo").innerHTML = text3;



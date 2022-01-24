function myfunc() {
  var1 = document.getElementById("n1").value;
  var2 = document.getElementById("n2").value;
  
  var1 = Number(var1);
  var2 = Number(var2);
  
  dif = var1 + var2;
  return document.getElementById("res").innerHTML = dif;
}
 
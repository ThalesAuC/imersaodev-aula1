function calcular(){
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var n3 = document.getElementById("n3").value;
  var n4 = document.getElementById("n4").value;
  var result = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4))/4;
  var resultFixed = result.toFixed(1);
  console.log("resultado da operação " + result)
  console.log("resultado fixado " + resultFixed)
  document.getElementById("resultado").innerHTML = resultFixed;
  return result
}
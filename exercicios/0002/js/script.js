function exibeAlertComValue() {
  let primeiroValue;
  let a = document.getElementById("inputValue1").value;
  let b = document.getElementById("inputValue2").value;
  console.log(`Variavel A = ${a} Variavel B = ${b}`);
  primeiroValue = a;
  a = b;
  b = primeiroValue;
  console.log(`Variavel A = ${a} Variavel B = ${b}`);
}

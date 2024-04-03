function converterMetrosParaPes() {
  const metros = parseFloat(document.getElementById("inputValue").value);

  //base de calculo foi usado 3,808
  const result = metros * 3.808;

  console.log(`Resultado = ${result}`);
  document.getElementById("result").innerHTML = `Resultado e = ${result}`;
}

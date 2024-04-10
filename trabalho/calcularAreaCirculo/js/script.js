function calcularVolume() {
  const largura = parseFloat(document.getElementById("inputValue1").value);
  const comprimento = parseFloat(document.getElementById("inputValue2").value);
  const altura = parseFloat(document.getElementById("inputValue3").value);

  const result = largura * comprimento * altura;

  console.log(`Resultado = ${result}`);
  document.getElementById("result").innerHTML = `Resultado do volume e = ${result}`;
}

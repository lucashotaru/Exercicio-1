function calcularVolume() {
  const largura = parseFloat(document.getElementById("largura").value);
  const comprimento = parseFloat(document.getElementById("comprimento").value);
  const altura = parseFloat(document.getElementById("altura").value);

  const result = largura * comprimento * altura;

  console.log(`Resultado = ${result}`);
  document.getElementById("result").innerHTML = `Resultado do volume e = ${result}`;
}

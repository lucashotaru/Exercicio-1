function calcularArea() {
  const largura = parseFloat(document.getElementById("inputValue1").value);
  const comprimento = parseFloat(document.getElementById("inputValue2").value);

  const result = largura * comprimento;

  console.log(`Resultado = ${result}`);
  document.getElementById("result").innerHTML = `Resultado da area e = ${result} m²`;
}

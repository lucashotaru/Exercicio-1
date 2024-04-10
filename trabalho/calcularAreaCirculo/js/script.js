function calcularAreaCirculo() {
  const raio = parseFloat(document.getElementById("raio").value);

  // Obs: o correto seria utilizar a funcao Math.PI do proprio js
  // com o valor declarado de somente 3.14 pode ter uma margem de erro
  const result = 3.14 * raio * raio;

  console.log(`Resultado = ${result}`);
  document.getElementById("result").innerHTML = `Resultado da area do ciruclo = ${result}`;
}

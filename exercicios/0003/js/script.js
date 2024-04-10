function somaEMediaIdade() {
  const idade1 = parseInt(document.getElementById("inputValue1").value);
  const idade2 = parseInt(document.getElementById("inputValue2").value);

  const soma = idade1 + idade2;
  const media = soma / 2;

  var resultadoSoma = "A soma das idades e =";
  var resultadoMedia = "A media das idades e =";

  console.log(`${resultadoSoma} ${soma}`);
  console.log(`${resultadoMedia} ${media}`);
}

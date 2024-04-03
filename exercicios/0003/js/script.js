function somaEMediaIdade() {
  const idade1 = parseInt(document.getElementById("inputValue1").value);
  const idade2 = parseInt(document.getElementById("inputValue2").value);

  const soma = idade1 + idade2;
  const media = soma / 2;

  console.log(`A soma das idades e = ${soma}`);
  console.log(`A media das idades e = ${media}`);
}

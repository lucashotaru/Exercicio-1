function calculadora() {
  const numero1 = parseFloat(document.getElementById("inputValue1").value);
  const numero2 = parseFloat(document.getElementById("inputValue2").value);

  let result;

  const selectOperation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;

  console.log(selectOperation);

  switch (selectOperation) {
    case "adicao":
      result = numero1 + numero2;
      break;
    case "subtracao":
      result = numero1 - numero2;
      break;
    case "multi":
      result = numero1 * numero2;
      break;
    default:
      result = numero1 / numero2;
      break;
  }

  var resultado = "O resultado =";

  console.log(`${resultado} ${result}`);
  document.getElementById("result").innerHTML = `${resultado} ${result}`;
}

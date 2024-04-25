function convertFahEmCelsius() {
  const farenheit = parseFloat(document.getElementById("farenheit").value);

  let result = (farenheit - 32) / 1.8;

  let ResultadoString = 'Resultado em celcius';

  console.log(`${ResultadoString} = ${result} °C`);
  document.getElementById("result").innerHTML = `${ResultadoString} = ${result} °C`;

  result = Math.round(result);

  ResultadoString += ' arredondado ';

  console.log(`${ResultadoString} = ${result} °C`);
  document.getElementById("resultArredondado").innerHTML = `${ResultadoString}  = ${result} °C`;
}

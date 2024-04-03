//Tabela da base do calculo de 2023 https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2023

function calcularImpostoDeRenda() {
  const valorSalario = parseFloat(document.getElementById("inputValue").value);

  console.log(valorSalario);

  let result;

  if (valorSalario <= 2112.0) result = "Isento";
  else if (valorSalario >= 2112.01 && valorSalario <= 2826.65)
    result = valorSalario * 0.075;
  else if (valorSalario >= 2826.66 && valorSalario <= 3751.05)
    result = valorSalario * 0.15;
  else if ((valorSalario >= 3751.06 && valorSalario <= 4.664, 68))
    result = valorSalario * 0.225;
  else {
    result = valorSalario * 0.275;
  }

  if (result == "Isento") {
    console.log("Salario isento de imposto de renda");
  } else {
    console.log(`Parcela do imposto = ${result}`);
  }
}

import sumar from "./sumador";
import multiplicar from "./multiplicador"; 

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const sumarButton = document.querySelector("#sumar-button");
const multiplicarButton = document.querySelector("#multiplicar-button");
const div = document.querySelector("#resultado-div");

sumarButton.addEventListener("click", () => {
  const firstNumber = Number(first.value);
  const secondNumber = Number(second.value);
  const resultado = sumar(firstNumber, secondNumber);
  div.innerHTML = `<p>${resultado}</p>`;
});

multiplicarButton.addEventListener("click", () => {
  const firstNumber = Number(first.value);
  const secondNumber = Number(second.value);
  const resultado = multiplicar(firstNumber, secondNumber);
  div.innerHTML = `<p>${resultado}</p>`;
});

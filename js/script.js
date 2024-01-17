import { modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notANumber, calculateIMC} from "./utils.js";

// variáveis 
const form = document.querySelector("form");
export const inputWeight = document.querySelector("#weight");
export const inputHeight = document.querySelector("#height");


form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
  if(weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result); 

}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  modal.message.innerText = message;

  modal.open();
  
}

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();

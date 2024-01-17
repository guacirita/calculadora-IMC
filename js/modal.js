import { inputHeight, inputWeight } from "./script.js";
export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    modal.wrapper.classList.add("open");
  },
  close() {
    modal.wrapper.classList.remove("open");
  }
}

modal.buttonClose.onclick = () => {
  modal.close();
  inputWeight.value = "";
  inputHeight.value = "";
}
/*
poderia fazer desta forma, mas é subscrito caso reutilize em outro 
arquivo, não funcionando.
window.onkeydown = handleKeydown;
*/

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if(event.key === "Escape") {
    modal.close();
  }
}
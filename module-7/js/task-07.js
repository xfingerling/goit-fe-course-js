const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

function changeFontSize() {
  text.style.fontSize = `${input.value}px`;
}

input.addEventListener("input", changeFontSize);

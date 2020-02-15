const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

function changeOutput() {
  output.innerHTML = input.value;

  if (!input.value) {
    output.innerHTML = "незнакомец";
  }
}

input.addEventListener("input", changeOutput);

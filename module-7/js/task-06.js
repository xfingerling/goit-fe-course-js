const input = document.getElementById("validation-input");

const inputValidation = function() {
  const isValid = +input.dataset.length === input.value.length;

  if (isValid) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (!isValid) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

input.addEventListener("blur", inputValidation);

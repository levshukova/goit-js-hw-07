const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  input.classList.add("invalid");
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.replace("invalid", "valid");
  }
}

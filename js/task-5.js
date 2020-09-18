const refs = {
  nameInput: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onInput);

function onInput(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
  if (refs.nameInput.value === "") {
    refs.nameLabel.textContent = "незнакомец";
  }
}

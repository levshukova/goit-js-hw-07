const refs = {
  inputEl: document.querySelector("#controls input"),
  renderBtnEl: document.querySelector('[data-action="render"]'),
  destroyBtnEl: document.querySelector('[data-action="destroy"]'),
  boxesEl: document.querySelector("#boxes"),
};

refs.renderBtnEl.addEventListener("click", () =>
  createBoxes(refs.inputEl.value)
);
refs.destroyBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const basicSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = basicSize + i * 10 + "px";
    boxEl.style.height = basicSize + i * 10 + "px";
    boxEl.style.backgroundColor =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    refs.boxesEl.appendChild(boxEl);
  }
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
}

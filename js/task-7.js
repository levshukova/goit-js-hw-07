const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", function () {
  const size = refs.inputEl.value;
  refs.textEl.style.fontSize = size + "px";
});

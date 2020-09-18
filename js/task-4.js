const counter = {
  value: 0,
  increment(event) {
    this.value += 1;
  },
  decrement(event) {
    this.value -= 1;
  },
};

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtnEl.addEventListener("click", function (event) {
  counter.decrement(event);
  valueEl.textContent = counter.value;
});

incrementBtnEl.addEventListener("click", function (event) {
  counter.increment(event);
  valueEl.textContent = counter.value;
});

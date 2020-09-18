const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.querySelector("#ingredients");
const elements = ingredients.map((option) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = option;
  return ingredientEl;
});

listEl.append(...elements);

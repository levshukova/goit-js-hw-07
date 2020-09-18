const itemsEl = document.querySelectorAll(".item");
console.log(`В списке ${itemsEl.length} категории.`);

itemsEl.forEach((category) => {
  const title = category.firstElementChild.textContent;
  const quantity = category.querySelectorAll("li").length;
  console.log(`Категория: ${title}\nКоличество элементов: ${quantity}`);
});

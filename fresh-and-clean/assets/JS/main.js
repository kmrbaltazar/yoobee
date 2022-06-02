// Add items to existing list upon button click
function addItem() {
  const item = document.querySelector("#input").value;
  const ul = document.querySelector("#list");
  const li = document.createElement("li");
  li.innerHTML = item;
  ul.appendChild(li);
}

// Clear text field after adding item to the list
function clearField() {
  const item = document.querySelector("#input");
  item.value = "";
}

// Run the 2 functions using the same button
const useButton = document.querySelector("#button");
useButton.addEventListener("click", function () {
  addItem();
  clearField();
});

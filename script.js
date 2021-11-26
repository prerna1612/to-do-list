document.querySelector("#input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const input = document.querySelector("#input");
    addItem(input.value);
  }
});

document.querySelector("#add_list").addEventListener("click", function () {
  const input = document.querySelector("#input");
  addItem(input.value);
});

addItem = function (input) {
  const item = document.createElement("div");
  const div = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const text = document.createElement("p");
  const addIcon = document.createElement("i");

  item.className = "item";
  text.textContent = input;

  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function() {
    checkIcon.style.color = "limegreen";
  });
  div.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", function() {
    item.remove();
  });

  div.appendChild(trashIcon);

  item.appendChild(text);
  item.appendChild(div);

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
};

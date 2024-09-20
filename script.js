
const btn = document.querySelector("#btn");
const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("You need to write something first!");
  } else {
    const val = input.value;
    const newElem = document.createElement("li");
    list.appendChild(newElem);
    newElem.textContent = val;
    input.value = "";
    const btn = document.createElement("button");
    btn.textContent = "delete";
    newElem.appendChild(btn);
    btn.addEventListener("click", () => {
      newElem.remove();
    });
  }
});

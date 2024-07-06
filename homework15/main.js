const inputText = document.getElementsByClassName("js--form__input");
const formBtn = document.getElementsByClassName("form__btn");
const ul = document.getElementsByClassName("js--todos-wrapper");
const checkedTusk = [];

function taskNumber() {
  if (localStorage.getItem("taskNum" === null)) {
    localStorage.setItem("taskNum", 1);
  } else {
    let oldTaskNum = localStorage.getItem("taskNum");
    let newTaskNum = +oldTaskNum + 1;
    localStorage.setItem("taskNum", newTaskNum);
  }
}

formBtn[0].addEventListener("click", function (event) {
  taskNumber();
  event.preventDefault();
  const newString = inputText[0].value;
  localStorage.setItem(
    localStorage.getItem("taskNum"),
    JSON.stringify(newString)
  );
});

ul[0].addEventListener("click", function (event) {
  const target = event.target;
  const parentLi = event.target.parentElement;
  if (target.tagName === "INPUT") {
    const newValue = localStorage.getItem(parentLi.id) + ",,,...delete";
    localStorage.setItem(parentLi.id, newValue);
  }
  if (target.tagName === "BUTTON") {
    localStorage.removeItem(parentLi.id);
  }
});

(function refreshTask() {
  for (let x = 0; x <= +localStorage.getItem("taskNum"); x++) {
    if (localStorage.getItem(`${x}`) !== null) {
      ul[0].insertAdjacentHTML(
        "beforeEnd",
        `<li class="todo-item ${checkerOfCheck(x)}" id="${x}">
              <input type="checkbox" />
              <span class="todo-item__description">
                ${backTusk(x)}
              </span>
              <button class="todo-item__delete">Видалити</button>
            </li>`
      );
    }
  }
})();

function checkerOfCheck(x) {
  const allValueSplit = localStorage.getItem(x).split(",,,...");
  const check = allValueSplit[1];
  let checkValue = "";
  if (check === "delete") {
    checkValue = "todo-item--checked";
  }
  return checkValue;
}

function backTusk(x) {
  const allValueSplit = localStorage.getItem(x).split(",,,...");
  const text = allValueSplit[0];
  return text;
}

const li = document.getElementsByTagName("li");
console.log(li);

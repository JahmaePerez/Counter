const counterDisplayElem = document.querySelector(".value");
const counterMinusElem = document.querySelector(".decrease");
let counterPlusElem = document.querySelector(".increase");
const counterResetElem = document.querySelector(".reset");

let count = 0;

counterPlusElem.addEventListener("click", () => {
  count++;
  switchColor();
  updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
  count--;
  switchColor();
  updateDisplay();
});

counterResetElem.addEventListener("click", () => {
  count = 0;
  switchColor();
  updateDisplay();
});

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}

function switchColor() {
  if (count > 0) {
    counterDisplayElem.style.color = "green";
  } else if (count < 0) {
    counterDisplayElem.style.color = "red";
  } else {
    counterDisplayElem.style.color = "black";
  }
}

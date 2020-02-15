const value = document.getElementById("value");
const counter = document.getElementById("counter");

let counterValue = 0;

function increment() {
  value.innerHTML = ++counterValue;
}

function decrement() {
  value.innerHTML = --counterValue;
}

counter.lastElementChild.addEventListener("click", increment);
counter.firstElementChild.addEventListener("click", decrement);

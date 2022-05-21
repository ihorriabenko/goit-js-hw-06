let counterValue = 0;

const refs = {
  value: document.querySelector("#value"),
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
};

refs.decrement.addEventListener("click", minus);
function minus() {
  counterValue -= 1;
  document.getElementById("value").innerHTML = counterValue;
}

refs.increment.addEventListener("click", plus);
function plus() {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;
}

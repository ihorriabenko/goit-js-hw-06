const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", isDataLengthTrue);

function isDataLengthTrue (event) {
  if (event.currentTarget.getAttribute("data-length") > event.currentTarget.value.length) {
    event.currentTarget.classList.add("invalid");
  } else {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  }
}

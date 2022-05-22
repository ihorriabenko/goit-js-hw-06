function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    body: document.querySelector('body'),
    btn: document.querySelector('.change-color'),
};



console.log(refs.body);

refs.btn.addEventListener('click', a);

function a() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

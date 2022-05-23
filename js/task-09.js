function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    body: document.querySelector('body'),
    btn: document.querySelector('.change-color'),
    color: document.querySelector('.color'),
};

refs.btn.addEventListener('click', changeColor);

function changeColor() {
    const randomColor = (refs.body.style.backgroundColor = getRandomHexColor());
    refs.color.textContent = `- ${randomColor}`;
}

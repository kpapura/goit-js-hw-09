const delay = 1000;
let interval = null;

const refs = {
    buttonStart: document.querySelector('button[data-start]'),
    buttonStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

refs.buttonStop.disabled = true;
refs.buttonStart.addEventListener('click', onButtonStart);
refs.buttonStop.addEventListener('click', onButtonStop);


function onButtonStart() {
    refs.buttonStart.disabled = true;
    refs.buttonStop.disabled = false;
 
    interval = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()
    }, delay);
}

function onButtonStop() {
    refs.buttonStart.disabled = false;
    refs.buttonStop.disabled = true;

    clearInterval(interval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
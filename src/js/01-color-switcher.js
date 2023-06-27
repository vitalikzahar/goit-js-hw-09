const startBt = document.querySelector('button[data-start]');
const stopBt = document.querySelector('button[data-stop]');
const bodyEl = document.body

function getRandomHexColor() {
         return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

let timerId = null;

startBt.addEventListener("click",() =>{
    timerId = setInterval(() =>{
    bodyEl.style.backgroundColor = getRandomHexColor()
   }, 1000);
   startBt.setAttribute('disabled', '');
});

stopBt.addEventListener("click", () => {
    clearInterval(timerId);
    startBt.removeAttribute("disabled")
});

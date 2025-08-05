const form = document.querySelector('.time-counter__form');
const input = document.querySelector('.time-counter__input');
const result = document.querySelector('.time-counter__answer');
const button = document.querySelector('.time-counter__button');

button.addEventListener('click', onBtnClick);

function onBtnClick(e) { 
    e.preventDefault();
    const totalSeconds = Number(input.value)
if (isNaN(totalSeconds) || totalSeconds < 0) {
  result.textContent = "Некоректне число!";
} else {

  
    const days = Math.floor(totalSeconds / 86400)
    const hours = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, '0');
     result.textContent = `${days}дн. ${hours}:${minutes}:${seconds}`
    console.log(`${days} ${hours} ${minutes} ${seconds}`);
    }
}

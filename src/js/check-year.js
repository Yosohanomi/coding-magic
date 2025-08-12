const input = document.querySelector('.check-year__input');
const result = document.querySelector('.check-year__answer');
const button = document.querySelector('.check-year__button');

button.addEventListener('click', onBtnClick);

function onBtnClick(e) {
    e.preventDefault();
    if (input.value % 4 === 0 && input.value > 0) {
        result.textContent = 'Ви народилися у високосний рік!';
        result.style.color = "#039900"
    } else if (input.value % 4 !== 0 && input.value > 0) {
        result.textContent = 'Ви народилися не у високосний рік';
        result.style.color = "#990000"
    } else {
        result.textContent = 'Будь ласках введіть коректний рік.';
        result.style.color = "#990000"
    }
}
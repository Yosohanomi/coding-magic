const form = document.querySelector('check-year__form');
console.log(form);
const result = document.querySelector('.check-year-answer');
const button = document.querySelector('.check-year__button');

button.addEventListener('click', onBtnClick);

function onBtnClick(e) {
    e.preventDefault();
    console.log(form.year.value);
    if (form.year.value % 4 === 0 && form.year.value > 0) {
        result.textContent = 'Ви народилися високосний рік!';
        sult.classList.add('leap-success');
    } else if (form.year.value % 4 !== 0 && form.year.value > 0) {
        result.textContent = 'Ви народилися не високосний рік';
        result.classList.add('leap-error');
    } else {
        result.textContent = 'Будь ласках введіть коректний рік.';
        result.classList.add('leap-error');
    }
}   
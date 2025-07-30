const userNumber = document.querySelector(".guess-number__input").value;
const result = document.getElementById(".guess-number__result");
const button = document.querySelector(".guess-number__btn");

const number = Number(userNumber);
const computerNumber = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", checkNumber)

function checkNumber() {

    if (!number || number < 1 || number > 10) {
        result.textContent = "Будь ласка, введіть число від 1 до 10";
        result.classList.add = "guess-number__lose";
        return;
    }

    if (number === computerNumber) {
        result.textContent = `Вітаю, ви вгадали число ${computerNumber}!`;
        result.classList.add = "guess-number__win";
    } else {
        result.textContent = `Ви програли, комп’ютер загадав ${computerNumber}`;
        result.classList.add = "guess-number__lose";
    }
}
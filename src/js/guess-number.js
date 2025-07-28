const computerNumber = Math.floor(Math.random() * 10) + 1;

function checkNumber() {
    const userNumber = document.querySelector(".guess-number__input").value;
    const result = document.querySelector(".guess-number__result");

    const guess = Number(userNumber);

    if (!guess || guess < 1 || guess > 10) {
        result.textContent = "Будь ласка, введіть число від 1 до 10";
        return;
    }

    if (guess === computerNumber) {
        result.textContent = `Вітаю, ви вгадали число ${computerNumber}!`;
    } else {
        result.textContent = `Ви програли, комп’ютер загадав ${computerNumber}`;
    }
}
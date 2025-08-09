const input = document.querySelector(".guess-number__input");
const result = document.querySelector(".guess-number__result");
const button = document.querySelector(".guess-number__btn");

button.addEventListener("click", e => {
    e.preventDefault();

    const userNumber = Number(input.value);
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    if (!userNumber || userNumber < 1 || userNumber > 10) {
        result.textContent = "Будь ласка, введіть число від 1 до 10";
        result.style.color = "#990000";
        return;
    }

    if (userNumber === computerNumber) {
        result.textContent = `Вітаю, ви вгадали число ${computerNumber}!`;
        result.style.color = "#039900";
    } else {
        result.textContent = `Ви програли, комп’ютер загадав число ${computerNumber}`;
        result.style.color = "#990000";
    }
});
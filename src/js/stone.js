const result = document.querySelector(".stone__result");
const computerScoreEl = document.querySelector(".stone__computer__score");
const userScoreEl = document.querySelector(".stone__user__score");
const buttons = document.querySelectorAll(".stone__btn");

const choices = ["камінь", "ножиці", "папір"];
let computerScore = 0;
let userScore = 0;

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const userChoice = choices[index];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        if (userChoice === computerChoice) {
            result.textContent = `Нічия! Обидва обрали ${userChoice}`;
            result.style.color = "#000000";
        } else if (
            (userChoice === "камінь" && computerChoice === "ножиці") ||
            (userChoice === "ножиці" && computerChoice === "папір") ||
            (userChoice === "папір" && computerChoice === "камінь")
        ) {
            result.textContent = `Ви виграли раунд! Ви обрали ${userChoice}, a комп’ютер ${computerChoice}`;
            result.style.color = "#039900";
            userScore++;
        } else {
            result.textContent = `Комп’ютер виграв раунд! Ви обрали ${userChoice}, a комп’ютер ${computerChoice}`;
            result.style.color = "#990000";
            computerScore++;
        }

        userScoreEl.textContent = userScore;
        computerScoreEl.textContent = computerScore;
    });
});
const result = document.getElementById("stone__result");
const button = document.querySelector(".stone__computer__btn");

const choices = ["камінь", "ножиці", "папір"];
const computerChoice = choices[Math.floor(Math.random() * 3)];

let computerScore = 0;
let userScore = 0;

button.addEventListener("click", userIsPlaying)

function userIsPlaying(userChoice) {
    if (userChoice === computerChoice) {
        result.textContent = "Нічия!";
        result.classList.add = "stone__result__draw";
    } else if (
        (userChoice === "камінь" && computerChoice === "ножиці") ||
        (userChoice === "ножиці" && computerChoice === "папір") ||
        (userChoice === "папір" && computerChoice === "камінь")
    ) {
        result.textContent = "Ви виграли раунд!";
        result.classList.add = "stone__result__win";
        userScore++;
    } else {
        result.textContent = "Комп’ютер виграв раунд!";
        result.classList.add = "stone__result__lose";
        computerScore++;
    }

    document.querySelector(".stone__computer__score").textContent = computerScore;
    document.querySelector(".stone__user__score").textContent = userScore;
}
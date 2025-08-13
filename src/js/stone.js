const result = document.querySelector(".stone__result");
const computerScoreEl = document.querySelector(".stone__computer__score");
const userScoreEl = document.querySelector(".stone__user__score");
const buttons = document.querySelectorAll(".stone__btn");
const computerBtn = document.querySelector('.stone__computer__btn');

import stone from '../img/stone/stone.png';
import scissors from '../img/stone/scissors.png';
import paper from '../img/stone/paper.png';

const choices = ["stone", "scissors", "paper"];
let computerScore = 0;
let userScore = 0;

function compChoiceMarkup(element) {
    if (element === 'stone') {
      computerBtn.innerHTML = `<img src="${stone}" />`;
    } else if (element === 'scissors') {
      computerBtn.innerHTML = `<img src="${scissors}" />`;
    } else if (element === 'paper') {
      computerBtn.innerHTML = `<img src="${paper}" />`;
    } else {
      computerBtn.innerHTML = '';
    }
  }

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const userChoice = choices[index];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        compChoiceMarkup(computerChoice)

        if (userChoice === computerChoice) {
            result.textContent = `Нічия!`;
            result.style.color = "var(--secondary-color)";
        } else if (
            (userChoice === "stone" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "stone")
        ) {
            result.textContent = `Ви виграли раунд!`;
            result.style.color = "#039900";
            userScore++;
        } else {
            result.textContent = `Комп’ютер виграв раунд!`;
            result.style.color = "#990000";
            computerScore++;
        }

        userScoreEl.textContent = userScore;
        computerScoreEl.textContent = computerScore;
    });
});

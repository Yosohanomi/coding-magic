const form = document.querySelector('.highest-number__form')
const inputs = document.querySelectorAll('.highest-number__input')
const result = document.querySelector('.highest-number__answer')

form.addEventListener("input", clickOnInput)

function clickOnInput() {
const numbers = []

inputs.forEach(input => {
    const value = input.value
    numbers.push(Number(value))
});
const max = Math.max(...numbers)

result.textContent = `Найбільше число, яке ви ввели - ${max}`
}
const num1El = document.querySelector(".calculator__group__num1");
const num2El = document.querySelector(".calculator__group__num2");
const operationBtn = document.querySelectorAll(".calculator__group__options__btn");
const equalBtn = document.querySelector(".calculator__group__equal");
const resultEl = document.querySelector(".calculator__group__result");

let selectedOperation = null;

operationBtn.forEach(button => {
    button.addEventListener("click", () => {
        selectedOperation = button.dataset.options;
        operationBtn.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    })
});

equalBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1El.value);
    const num2 = parseFloat(num2El.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultEl.textContent = "Будь ласка, введіть обидва числа";
        return;
    }

    if (!selectedOperation) {
        resultEl.textContent = "Оберіть дію";
        return;
    }

    let result;
    switch (selectedOperation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultEl.textContent = "Ділення на 0 неможливе";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultEl.textContent = "Невідома дія";
            return;
    }

    result = Math.round(result * 1000) / 1000;
    resultEl.textContent = `Результат: ${result}`;
});
const diceTypeSelect = document.querySelector("#diceTypeSelect");
const rollDiceButton = document.querySelector("#rollDiceButton");
const resultLog = document.querySelector("#resultLog");
let doubleRollCheck = document.querySelector("#doubleRollCheck");

function rollDice(diceType) {
    let result = Math.floor(Math.random() * diceType);
    if (result === 0) {
        result = diceType;
    }
    return result;
}

rollDiceButton.addEventListener("click", () => {
    const diceType = parseFloat(diceTypeSelect.value);
    let result;
    if (doubleRollCheck.checked) {
        let a = rollDice(diceType);
        let b = rollDice(diceType);
        if (a >= b) {
            result = a;
        } else {
            result = b;
        }
    } else {
        result = rollDice(diceType);
    }
    resultLog.textContent = `your result is ${result}`;
});
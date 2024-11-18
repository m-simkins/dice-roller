const input = document.querySelector("#input");
const button = document.querySelector("#button");
const log = document.querySelector("#log");

function rollDice(diceType) {
    let result = Math.floor(Math.random() * diceType);
    if (result === 0) {
        result = diceType;
    }
    return result;
}

button.addEventListener("click", () => {
    const diceType = parseFloat(input.value);
    const result = rollDice(diceType);
    log.textContent = `your result is ${result}`
});
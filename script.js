const input = document.querySelector("#diceType");
const flag = document.querySelector("#flag");
const log = document.querySelector("#log");

function rollDice(diceType) {
    let result = Math.floor(Math.random() * diceType);
    if (result === 0) {
        result = diceType;
    }
    return result;
}

input.addEventListener("change", () => {
    const diceType = parseFloat(input.value);
    flag.textContent = `you rolled a d${diceType}`
    const result = rollDice(diceType);
    log.textContent = `your result is ${result}`
});
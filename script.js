const diceTypeSelect = document.querySelector("#diceTypeSelect");
const rollButton = document.querySelector("#rollButton");
const resultLog = document.querySelector("#resultLog");
let diceCountInput = document.querySelector("#diceCountInput");

function rollDice(diceType) {
    let result = Math.floor(Math.random() * diceType);
    if (result === 0) {
        result = diceType;
    }
    return result;
}

function rollAll(diceType, diceCount) {
    let resultArray = [];
    for (i = 0; i < diceCount; i++) {
        resultArray.push(rollOne(diceType));
    }
    return resultArray;
}

rollDiceButton.addEventListener("click", () => {
    const diceType = parseFloat(diceTypeSelect.value);
    const diceCount = parseFloat(diceCountInput.value);
    if (diceCount === 1) {
        let result = rollOne(diceType);
        resultLog.textContent = `you rolled a ${result}`;
    } else {
        let result = rollAll(diceType, diceCount);
        let resultDisplay = result.join(", ")
        resultLog.textContent = `you rolled ${resultDisplay}`;
    }
});
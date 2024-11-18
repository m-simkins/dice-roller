const diceTypeSelect = document.querySelector("#diceTypeSelect");
const rollButton = document.querySelector("#rollButton");
const resultLog = document.querySelector("#resultLog");
const diceCountInput = document.querySelector("#diceCountInput");
const advantage = document.querySelector("#advantage");
const disadvantage = document.querySelector("#disadvantage");

function rollOne(diceType) {
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

function showResult(result) {
    if (Array.isArray(result)) {
        let display = result.join(", ");
        resultLog.textContent = `result: ${display}`;
    } else {
        resultLog.textContent = `result: ${result}`;
    }
}

rollButton.addEventListener("click", () => {
    const diceType = parseFloat(diceTypeSelect.value);
    const diceCount = parseFloat(diceCountInput.value);
    if (diceCount === 1) {
        let result = rollOne(diceType);
        showResult(result);
    } else {
        let result = rollAll(diceType, diceCount);
        showResult(result);
    }
});
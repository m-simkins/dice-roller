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
    resultLog.textContent = `result: ${result}`;
}

rollButton.addEventListener("click", () => {
    const diceType = parseInt(diceTypeSelect.value);
    const diceCount = parseInt(diceCountInput.value);
    if (diceCount === 1) {
        showResult(rollOne(diceType));
    } else {
        showResult(rollAll(diceType, diceCount).join(", "));
    }
});

advantage.addEventListener("click", () => {
    let result = rollAll(20, 2);
    if (result[0] > result[1]) {
        result = result[0];
        showResult(result);
    } else {
        result = result[1];
        showResult(result);
    }
});

disadvantage.addEventListener("click", () => {
    let result = rollAll(20, 2);
    if (result[1] > result[0]) {
        result = result[0];
        showResult(result);
    } else {
        result = result[1];
        showResult(result);
    }
});
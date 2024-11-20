const diceTypeSelect = document.querySelector("#diceTypeSelect");
const freeRollButton = document.querySelector("#freeRollButton");
const resultLog = document.querySelector("#resultLog");
const diceCountInput = document.querySelector("#diceCountInput");
const advantage = document.querySelector("#advantage");
const disadvantage = document.querySelector("#disadvantage");
const statRollButton = document.querySelector("#statRollButton");

function rollOne(diceType) {
    let result = Math.floor(Math.random() * diceType);
    if (result === 0) {
        result = diceType;
    }
    return result;
}

function rollAll(diceCount, diceType) {
    let resultArray = [];
    for (i = 0; i < diceCount; i++) {
        resultArray.push(rollOne(diceType));
    }
    return resultArray;
}

function rollStat(diceCount, diceType) {
    let statArray = rollAll(diceCount, diceType);
    let discard = Math.min(...statArray);
    let position = statArray.indexOf(discard);
    let result;
    statArray.splice(position, 1);
    for (i = 0; i < statArray.length; i++) {
        result += statArray[i];
    }
    return result;
}

function showResult(result) {
    resultLog.textContent = `result: ${result}`;
}

freeRollButton.addEventListener("click", () => {
    const diceType = parseInt(diceTypeSelect.value);
    const diceCount = parseInt(diceCountInput.value);
    if (diceCount === 1) {
        showResult(rollOne(diceType));
    } else {
        showResult(rollAll(diceType, diceCount).join(", "));
    }
});

advantage.addEventListener("click", () => {
    let result = rollAll(2, 20);
    if (result[0] > result[1]) {
        result = result[0];
        showResult(result);
    } else {
        result = result[1];
        showResult(result);
    }
});

disadvantage.addEventListener("click", () => {
    let result = rollAll(2, 20);
    if (result[1] > result[0]) {
        result = result[0];
        showResult(result);
    } else {
        result = result[1];
        showResult(result);
    }
});

statRollButton.addEventListener("click", () => {
    showResult(rollStat(4, 6));
});
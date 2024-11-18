const button = document.querySelector("button");
const flag = document.querySelector("#flag");
const log = document.querySelector("#log");

function logResult(result) {
    flag.textContent = `you roll ${result}.`
    log.textContent += `${result}, `;
}

function rollDice() {
    let result = Math.floor(Math.random() * 20);
    if (result === 0) {
        result = 20;
    }
    logResult(result);
}

button.addEventListener("click", rollDice);


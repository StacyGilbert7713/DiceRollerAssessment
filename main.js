let numOfDice = document.querySelector("#textbox");
let rollDiceButton = document.querySelector(".roll-button");
let total = document.querySelector("#total-term");
let showAllRollsButton = document.querySelector(".show-all-rolls");
let allRolls = document.querySelector("#all-rolls");
let dieRolls = []
let totalSum = 0

rollDiceButton.addEventListener("click", function () {
    let numOfDiceAmount = Number(numOfDice.value)

    let loop = 0;
    while (numOfDiceAmount > loop) {
        let oneRoll = Math.floor(Math.random() * 6) + 1;
        loop += 1
        totalSum += oneRoll
        dieRolls.push(oneRoll)   
    }
    total.innerHTML = "Total: " + totalSum 
})

showAllRollsButton.addEventListener("click", function () {
    let loop = 0;
    while (loop < dieRolls.length) {
        allRolls.innerHTML += "<li>" + dieRolls[loop] + "</li>"
        loop += 1
    }
})
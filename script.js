// User Rock Button
showRock = (event) => {
  let click = document.querySelector("#show-click")
  click.innerHTML = "Rock"
}

let rockBtn = document.querySelector("#rock-btn")
rockBtn.addEventListener("click", showRock)

// User Paper Button
showPaper = (event) => {
  let click = document.querySelector("#show-click")
  click.innerHTML = "Paper"
}

let paperBtn = document.querySelector("#paper-btn")
paperBtn.addEventListener("click", showPaper)

// User Scissors Button
showScissors = (event) => {
  let click = document.querySelector("#show-click")
  click.innerHTML = "Scissors"
}

let scissorsBtn = document.querySelector("#scissors-btn")
scissorsBtn.addEventListener("click", showScissors)


// create computer function for R P S - random()

let optionsPC = [rock, paper, scissors]


// create if or SWITCH to show how you can win

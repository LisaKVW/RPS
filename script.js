// User Rock Button
showRock = (event) => {
  let click = document.querySelector("#show-user-click")
  click.innerHTML = "Rock"
  userChoice = "Rock"
  random()
  compare()
}
let rockBtn = document.querySelector("#rock-btn")
rockBtn.addEventListener("click", showRock)


// User Paper Button
showPaper = (event) => {
  let click = document.querySelector("#show-user-click")
  click.innerHTML = "Paper"
  userChoice = "Paper"
  random()
  compare()
}
let paperBtn = document.querySelector("#paper-btn")
paperBtn.addEventListener("click", showPaper)

// User Scissors Button
showScissors = (event) => {
  let click = document.querySelector("#show-user-click")
  click.innerHTML = "Scissors"
  userChoice = "Scissors"
  random()
  compare()
}
let scissorsBtn = document.querySelector("#scissors-btn")
scissorsBtn.addEventListener("click", showScissors)


// create computer function for R P S - random()
let optionsPC = ["Rock", "Paper", "Scissors"]

random = () => {
  let computerPick = optionsPC[Math.floor(Math.random() * optionsPC.length)]
  showComp.innerHTML = computerPick
  console.log("Computer picks", computerPick)
}
let showComp = document.querySelector("#computer-pick")

// Create if or SWITCH to show how you can win - BEGIN GAME
let showResult = document.querySelector("#result")

compare = () => {
  if (userChoice === showComp.innerHTML) {
    showResult.innerHTML = "Its a tie!"
  } else if (userChoice === "Paper" && showComp.innerHTML === "Rock") {
    showResult.innerHTML = "You won!"
    player.innerHTML ++
  } else if (userChoice === "Scissors" && showComp.innerHTML === "Rock") {
    showResult.innerHTML = "Loser!"
    enemy.innerHTML ++
  } else if (userChoice === "Rock" && showComp.innerHTML === "Paper") {
    showResult.innerHTML = "Loser!"
    enemy.innerHTML ++
  } else if (userChoice === "Rock" && showComp.innerHTML === "Scissors") {
    showResult.innerHTML = "You Won!"
    player.innerHTML ++
  } else if (userChoice === "Paper" && showComp.innerHTML === "Scissors") {
    showResult.innerHTML = "Loser!"
    enemy.innerHTML ++
  } else if (userChoice === "Scissors" && showComp.innerHTML === "Paper") {
    showResult.innerHTML = "You Won!"
    player.innerHTML ++
  }
}

// Keep Score of Game
let player = 0
player = document.querySelector("#player-score")
let enemy = 0
enemy = document.querySelector("#enemy-score")



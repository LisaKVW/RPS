// User Rock Button
showRock = (event) => {
  let click = document.querySelector("#show-user-click")
  click.innerHTML = "Rock"
  userChoice = "Rock"

  showComp.innerHTML = computerPick
  compare()
}

let rockBtn = document.querySelector("#rock-btn")
rockBtn.addEventListener("click", showRock)

// User Paper Button
showPaper = (event) => {
  let click = document.querySelector("#show-user-click")
  click.innerHTML = "Paper"
  userChoice = "Paper"

  showComp.innerHTML = computerPick
  compare()
}

let paperBtn = document.querySelector("#paper-btn")
paperBtn.addEventListener("click", showPaper)

// User Scissors Button
showScissors = (event) => {
  let click = document.querySelector("#show-user-click")
  click.innerHTML = "Scissors"
  userChoice = "Scissors"

  showComp.innerHTML = computerPick
  compare()
}

let scissorsBtn = document.querySelector("#scissors-btn")
scissorsBtn.addEventListener("click", showScissors)


// create computer function for R P S - random()

let optionsPC = ["Rock", "Paper", "Scissors"]
let computerPick = optionsPC[Math.floor(Math.random() * optionsPC.length)]
console.log("Computer picks", computerPick)

let showComp = document.querySelector("#computer-pick")
// showComp.innerHTML = computerPick
// let computerSelect = document.querySelector("#computer-pick")


// create if or SWITCH to show how you can win - BEGIN GAME

let showResult = document.querySelector("#result")

compare = () => {
  if (userChoice === computerPick) {
    showResult.innerHTML = "Its a tie!"
  } else if (userChoice === "Paper" && computerPick === "Rock") {
    showResult.innerHTML = "You won!"
  } else if (userChoice === "Scissors" && computerPick === "Rock") {
    showResult.innerHTML = "Loser!"
  } else if (userChoice === "Rock" && computerPick === "Paper") {
    showResult.innerHTML = "Loser!"
  } else if (userChoice === "Rock" && computerPick === "Scissors") {
    showResult.innerHTML = "You Won!"
  } else if (userChoice === "Paper" && computerPick === "Scissors") {
    showResult.innerHTML = "Loser!"
  } else if (userChoice === "Scissors" && computerPick === "Paper") {
    showResult.innerHTML = "You Won!"
  }
}
// compare = () => {
//   if (userChoice === "Rock" && computerPick === "Rock") {
//     showResult.innerHTML = "Its a tie!"
//     console.log("its a tie")
//   } else if (userChoice === "Paper" && computerPick === "Rock") {
//     showResult.innerHTML = "You won!"
//     console.log("You won")
//   } else if (userChoice === "Scissors" && computerPick === "Rock") {
//     showResult.innerHTML = "Loser!"
//     console.log("loser")
//   }
// }



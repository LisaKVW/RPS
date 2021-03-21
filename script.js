// User Rock Button
showRock = (event) => {
  let click = document.querySelector("#show-user-click")
  click.innerHTML = "Rock"
  userChoice = "Rock"

  random()
  // showComp.innerHTML = computerPick
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
  // showComp.innerHTML = computerPick
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
  // showComp.innerHTML = computerPick
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

// create if or SWITCH to show how you can win - BEGIN GAME
let showResult = document.querySelector("#result")

compare = () => {
  if (userChoice === showComp.innerHTML) {
    showResult.innerHTML = "Its a tie!"
  } else if (userChoice === "Paper" && showComp.innerHTML === "Rock") {
    showResult.innerHTML = "You won!"
  } else if (userChoice === "Scissors" && showComp.innerHTML === "Rock") {
    showResult.innerHTML = "Loser!"
  } else if (userChoice === "Rock" && showComp.innerHTML === "Paper") {
    showResult.innerHTML = "Loser!"
  } else if (userChoice === "Rock" && showComp.innerHTML === "Scissors") {
    showResult.innerHTML = "You Won!"
  } else if (userChoice === "Paper" && showComp.innerHTML === "Scissors") {
    showResult.innerHTML = "Loser!"
  } else if (userChoice === "Scissors" && showComp.innerHTML === "Paper") {
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



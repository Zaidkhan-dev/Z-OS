let winner = "";
let userScore = 0;
let computerScore = 0;

function rndnum() {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
}

function getWinner(user, computer) {
  if (user === computer) return "Draw";
  if (
    (user === "rock" && computer === "scissor") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissor" && computer === "paper")
  ) {
    return "User";
  }
  return "Computer";
}

function animateHand(selector) {
  const el = document.querySelector(selector);
  el.style.animation = "none"; // Reset animation
  el.offsetHeight; // Trigger reflow
  el.style.animation = "down 0.5s ease-in-out 3"; // 3 loops
}

function toggleButtons(disabled) {
  document.querySelectorAll(".control").forEach(btn => {
    btn.disabled = disabled;
  });
}

function showWinner(winnerText) {
  const winnerDiv = document.querySelector(".winner");

  let title = winnerText === "Draw" ? "Draw" : `${winnerText} wins 🏆`;

  winnerDiv.innerHTML = `
    <div style="font-size: 24px; font-weight: bold;">${title}</div>
    <div style="font-size: 16px; margin-top: 6px;">You: ${userScore} | Computer: ${computerScore}</div>
  `;

  // Show only once
  if (winnerDiv.style.top === "-100vh" || !winnerDiv.style.top) {
    winnerDiv.style.top = "50px";
  }
}

function play(userChoice) {
  const computerChoice = rndnum();

  const leftImg = document.querySelector(".leftwrapper img");
  const rightImg = document.querySelector(".rightwrapper img");

  // Reset to default pose before animation
  leftImg.src = "rock.png";
  rightImg.src = "rock.png";
  leftImg.style.transform = "rotate(75deg)";
  rightImg.style.transform = "rotate(-75deg)";

  animateHand(".leftwrapper");
  animateHand(".rightwrapper");
  toggleButtons(true); // Disable buttons while animating

  // Reveal result after animation
  setTimeout(() => {
    leftImg.src = `${computerChoice}.png`;
    rightImg.src = `${userChoice}.png`;

    // Maintain rotation
    leftImg.style.transform = "rotate(75deg)";
    rightImg.style.transform = "rotate(-75deg)";

    winner = getWinner(userChoice, computerChoice);
    if (winner === "User") userScore++;
    else if (winner === "Computer") computerScore++;

    showWinner(winner);
    toggleButtons(false);
  }, 1500); // After 3 animation loops
}

function rock() {
  play("rock");
}
function paper() {
  play("paper");
}
function scissors() {
  play("scissor");
}
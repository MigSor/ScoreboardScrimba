let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeHeading = document.getElementById("home");
let guestHeading = document.getElementById("guest");

let homeCount = 0;
let guestCount = 0;
homeScore.textContent = homeCount;
guestScore.textContent = guestCount;

// we want to have 10 mins per game
let startTime = 10;
// 60 seconds per minute so we multiply 10 times 60
let time = startTime * 60;
// get the timer element to display the timer
let timer = document.getElementById("timer");
let timerInterval;

function startGame() {
  timerInterval = setInterval(function countdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    timer.textContent = `${minutes}:${seconds}`;
    time--;
  }, 1000);
}

function newGame() {
  let choice = confirm("Reset game?");

  if (choice) {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
    window.location.reload();
  }
}

function homeAdd1() {
  homeCount++;
  homeScore.textContent = homeCount;

  if (homeCount > guestCount) {
    homeHeading.style.backgroundColor = "#9aabd8";
    guestHeading.style.backgroundColor = "#1b244a";
  }
}

function homeAdd2() {
  homeCount = homeCount + 2;
  homeScore.textContent = homeCount;
  if (homeCount > guestCount) {
    homeHeading.style.backgroundColor = "#9aabd8";
    guestHeading.style.backgroundColor = "#1b244a";
  }
}
function homeAdd3() {
  homeCount = homeCount + 3;
  homeScore.textContent = homeCount;
  if (homeCount > guestCount) {
    homeHeading.style.backgroundColor = "#9aabd8";
    guestHeading.style.backgroundColor = "#1b244a";
  }
}

function guestAdd1() {
  guestCount++;
  guestScore.textContent = guestCount;
  if (guestCount > homeCount) {
    guestHeading.style.backgroundColor = "#9aabd8";
    homeHeading.style.backgroundColor = "#1b244a";
  }
}

function guestAdd2() {
  guestCount = guestCount + 2;
  guestScore.textContent = guestCount;
  if (guestCount > homeCount) {
    guestHeading.style.backgroundColor = "#9aabd8";
    homeHeading.style.backgroundColor = "#1b244a";
  }
}
function guestAdd3() {
  guestCount = guestCount + 3;
  guestScore.textContent = guestCount;
  if (guestCount > homeCount) {
    guestHeading.style.backgroundColor = "#9aabd8";
    homeHeading.style.backgroundColor = "#1b244a";
  }
}

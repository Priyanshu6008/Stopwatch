let resetBtn = document.getElementById("reset");
let startStopbtn = document.getElementById("startStopBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSec = 0;
let leadingMin = 0;
let leadingHour = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopwatch() {
  seconds++;
  if (seconds / 60 === 1) {
    minutes++;
    if (minutes / 60 === 1) {
      hours++;
    }
  }

  leadingSec = seconds<10? "0"+seconds:seconds;
  leadingMin = minutes < 10 ? "0" + minutes : minutes;
  leadingHour = hours < 10 ? "0" + hours : hours;

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHour + ":" + leadingMin + ":" + leadingSec);
}

function start() {
  timerInterval = window.setInterval(stopwatch, 1000);
  document.getElementById("startStopBtn").innerHTML =
    '<i class ="fa-solid fa-pause" id = "pause"></i>';
  timerStatus = "started";
}

function stop() {
  window.clearInterval(timerInterval);
  document.getElementById("startStopBtn").innerHTML =
    '<i class ="fa-solid fa-play" id = "play"></i>';
  timerStatus = "started";
}

startStopbtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    start();
  } else {
    stop();
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
  location.reload();
});

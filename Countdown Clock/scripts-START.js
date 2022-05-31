let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  //clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  // console.log({now, then});
  //💡setInterval: 1秒ごとに処理をする
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    //💡グローバルの clearInterval() メソッドは、以前に setInterval() の呼び出しによって確立されたタイマーを利用した繰り返し動作を取り消します

    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  //takes in seconds
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  // if the remainderSeconds is less than 10, return a 0
  // document.title = display;
  timerDisplay.textContent = display;
  // console.log(seconds, remainderSeconds);
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
  //もしhourが12より大きかったら-12をreturnする、じゃなかったら単にそのhourをreturnする
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
  // console.log(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset(); //clear out the value
});

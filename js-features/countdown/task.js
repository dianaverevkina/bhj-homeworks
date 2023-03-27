let timer = document.getElementById('timer');
let timerId = null;

function startTimer() {
  timerId = setInterval(() => {
    if (+timer.innerHTML === 0) {
      document.location.assign("песня.aiff");
      clearInterval(timerId);
      return;
    }
    timer.innerHTML--;
  }, 1000);
  
}

startTimer(); 

//Для второго задания 
let timerHours = document.getElementById('timer__hours');
let timerMinutes = document.getElementById('timer__minutes');
let timerSeconds = document.getElementById('timer__seconds');

let startTimerHours = Number(timerHours.textContent);
let startTimerMinutes = Number(timerMinutes.textContent);
let startTimerSeconds = Number(timerSeconds.textContent);

let timerId2 = null;


function startTimer2() {
  timerId2 = setInterval(() => {
    if (startTimerSeconds === 0) {
      if (startTimerMinutes === 0) {
        if (startTimerHours === 0 && startTimerMinutes === 0 & startTimerSeconds === 0) {
          alert('Вы победили в конкурсе!');
          clearInterval(timerId2);
          return;
        }
        startTimerHours--;
        timerHours.innerHTML = startTimerHours < 10 ? '0' + startTimerHours : startTimerHours;
        startTimerMinutes = 60;
      }
      startTimerMinutes--;
      timerMinutes.innerHTML = startTimerMinutes < 10 ? '0' + startTimerMinutes : startTimerMinutes;
      startTimerSeconds = 60;
    }
    startTimerSeconds--;
    timerSeconds.innerHTML = startTimerSeconds < 10 ? '0' + startTimerSeconds : startTimerSeconds;
  }, 1000);
}

startTimer2();
let counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let clickerSpeed = document.getElementById('clicker__speed');

let start;

cookie.onclick = () => {
  if (+counter.textContent > 0) {
    clickerSpeed.innerHTML = +((1000/(new Date() - start)).toFixed(2));
  }
  cookie.width = ++counter.textContent % 2 !== 0 ?  '230' : '200';
  start = new Date();
}
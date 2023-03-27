let counter = document.getElementById('clicker__counter');
let clicker__counter = +(counter.textContent);
let cookie = document.getElementById('cookie');
let clicker__speed = document.getElementById('clicker__speed');
let start = new Date();

cookie.onclick = () => {
  clicker__counter++;
  counter.innerHTML = clicker__counter;
  clicker__speed.innerHTML = +((clicker__counter/((new Date() - start)/1000)).toFixed(2));
  clicker__counter % 2 !== 0 ? cookie.width = '230' : cookie.width = '200';
}
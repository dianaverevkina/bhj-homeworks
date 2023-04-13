const rotator = document.querySelector('.rotator');
let i = 0;
let delay = 1000;

function rotatorWord() {
  const rotatorCases = [...rotator.querySelectorAll('.rotator__case')];
  rotatorCases[i].classList.remove('rotator__case_active');
  i === rotatorCases.length - 1 ? i = 0 : ++i;
  delay = rotatorCases[i].dataset.speed;
  rotatorCases[i].classList.add('rotator__case_active');
  
  timerId = setTimeout(rotatorWord, delay);
}

let timerId = setTimeout(rotatorWord, delay);



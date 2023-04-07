const rotator = document.querySelector('.rotator');
let i = 0;
let delay = 1000;

function rotatorWord() {
  const rotatorCases = [...rotator.querySelectorAll('.rotator__case')];
  let speed = rotatorCases[i].dataset.speed;
  rotatorCases[i].classList.remove('rotator__case_active');
  i === rotatorCases.length - 1 ? i = 0 : ++i;
  switch(true) {
    case speed === '2000': 
      delay = 2000;
      break;
    case speed === '500':
      delay = 500;
      break;
    case speed === '200': 
      delay = 200;
      break;
    default: 
      delay = 1000;
      break;
  }
  rotatorCases[i].classList.add('rotator__case_active');
  
  timerId = setTimeout(rotatorWord, delay);
}

let timerId = setTimeout(rotatorWord, delay);



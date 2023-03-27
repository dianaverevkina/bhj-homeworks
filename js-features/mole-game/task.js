let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++) {
  const hole = getHole(i);
  hole.onclick = () => {
    if (hole.className === 'hole hole_has-mole') {
      dead.innerHTML++;
      if (+dead.innerHTML === 10) {
        alert('Вы победили!');
        dead.innerHTML = 0;
        lost.innerHTML = 0;
      }
    } else {
      lost.innerHTML++;
      if (+lost.innerHTML === 5) {
        alert('Вы проиграли!');
        dead.innerHTML = 0;
        lost.innerHTML = 0;
      }
    }
  }
}



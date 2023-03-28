let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function showResults(text) {
  alert(text);
  dead.innerHTML = 0;
  lost.innerHTML = 0;
}

for (let i = 1; i < 10; i++) {
  const hole = getHole(i);
  hole.onclick = () => {
    if (hole.className === 'hole hole_has-mole') {
      dead.innerHTML++;
      if (+dead.innerHTML === 10) {
        showResults('Вы победили!');
      }
    } else {
      lost.innerHTML++;
      if (+lost.innerHTML === 5) {
        showResults('Вы проиграли!');
      }
    }
  }
}



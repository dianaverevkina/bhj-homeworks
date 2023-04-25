const editor = document.querySelector('.editor');
const buttonReset = document.querySelector('.button-reset');

function getSavedText() {
  let savedText = localStorage.getItem('Text');
  
  if(!savedText) return;

  editor.value = savedText;
}

getSavedText();

editor.addEventListener('input', storeText);

function storeText() {
  localStorage.setItem('Text', editor.value);
}

buttonReset.addEventListener('click', resetText);

function resetText() {
  editor.value = '';
  storeText();
}


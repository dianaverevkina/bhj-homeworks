class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.timer__seconds');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      if (this.firstSymbol === event.key) {
        this.startTimer();
      } 
      if (this.currentSymbol.textContent === event.key) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  startTimer() {
    this.timerId = setInterval(()=> {
      if (--this.timer.textContent === 0) this.fail();
    }, 1000);
  }

  success() {
    
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      clearInterval(this.timerId);
      this.reset();
    }
    
    clearInterval(this.timerId);  
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5 || this.timer.textContent === 0) {
      alert('Вы проиграли!');
      clearInterval(this.timerId);
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
      
    this.wordElement.innerHTML = html;
    this.firstSymbol = word[0];
    this.timer.textContent = word.length;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
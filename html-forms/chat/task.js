const chatWidget = document.querySelector('.chat-widget');
const messages = chatWidget.querySelector('.chat-widget__messages');
const chatWidgetInput = chatWidget.querySelector('.chat-widget__input');
const robotMessages = [
  'Здравствуйте и до свидания',
  'Я занят, не надо мне писать',
  'Зачем вы пишете нам?!',
  'Мне не нравится с Вами общаться',
  'Давайте завтра',
  'Это кто?',
  'Не знаю',
  'Вы странный',
];
let lastMessageTime;

//Открытие чата
function openChat() { 
  this.classList.add('chat-widget_active');
};

chatWidget.addEventListener('click', openChat);

//Автоматическое пролистывание чата вниз
function scrollChat() {
  const messageContainer = chatWidget.querySelector('.chat-widget__messages-container');
  messageContainer.scrollBy({
    top: messageContainer.scrollHeight,
    left: 0,
    behavior: 'smooth',
  })
}

//Отправка сообщений и ответ робота
function sendMessage(e) {
  if (e.key === 'Enter') {
    if (this.value.trim() === '') return false;
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${new Date().toLocaleTimeString().slice(0, 5)}</div>
        <div class="message__text">
          ${this.value}
        </div>
      </div>
    `;
    this.value = '';
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${new Date().toLocaleTimeString().slice(0, 5)}</div>
        <div class="message__text">
          ${robotMessages[Math.floor((Math.random() * robotMessages.length))]}
        </div>
      </div>
    `;
    
    scrollChat();
    lastMessageTime = new Date();
  }
}

chatWidgetInput.addEventListener('keydown', sendMessage);

//Проверка новых сообщений
let timerId = setTimeout(checkNewMessage, 30000);

function checkNewMessage() {
  clearTimeout(timerId);

  const clientMessages = chatWidget.querySelectorAll('.message_client');
  let diffTime = new Date() -  lastMessageTime;

  if (chatWidget.classList.contains('chat-widget_active') && (diffTime >= 30000 || clientMessages.length === 0)) {
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${new Date().toLocaleTimeString().slice(0, 5)}</div>
        <div class="message__text">
          Есть че покушать?
        </div>
      </div>
    `;

    scrollChat();
  }

  timerId = setTimeout(checkNewMessage, 30000);
}





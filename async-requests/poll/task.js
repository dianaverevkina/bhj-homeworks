const pollTitle = document.querySelector('.poll__title');
const pollAnswersContainer = document.querySelector('.poll__answers');

//Проверить статус ответа на запрос
function checkStatus(response) {  
  if (response.status < 400) {  
    return response.json(); 
  } else {  
    return response.json().then(error => {
      const e = new Error('Ошибка');
      e.data = error;
      throw e;
    })  
  }  
}

//Отправить запрос на получение данных опроса
function getPoll(url) {

  fetch(url)  
    .then(checkStatus)  
    .then(data => {
      console.log('Загрузка завершена', data);
      return data;
    }).then(loadPoll)
    .catch(error => console.log('Ошибка', error));
}

//Загрузить опрос
function loadPoll(pollData) {

  pollTitle.textContent = pollData.data.title;

  for (const answer of pollData.data.answers) {
    pollAnswersContainer.insertAdjacentHTML('beforeend', 
    `<button class="poll__answer">
      ${answer}
    </button>`);
  }

  const pollAnswers = pollAnswersContainer.querySelectorAll('.poll__answer');

  pollAnswers.forEach((answer, index) => answer.addEventListener('click', () => {
    alert('Спасибо, ваш голос засчитан!');
    let body = {
      vote: pollData.id.toString(),
      answer: index.toString(),
    }
    getPollResults('https://students.netoservices.ru/nestjs-backend/poll', body);
  }));
}

getPoll('https://students.netoservices.ru/nestjs-backend/poll');

//Отправить ответ опроса и получить данные результатов
function getPollResults(url, body) {
  
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {  
      "Content-type": "application/json; charset=utf-8"  
    },  
  }).then(checkStatus)  
  .then(data => {
    console.log('Загрузка завершена', data);
    return data;
  }).then(loadPollResults)
  .catch(error => console.log('Ошибка', error));
}

//Загрузить результаты опроса на веб-страницу
function loadPollResults(pollResults) {
  pollResults = pollResults.stat;

  pollAnswersContainer.innerHTML = '';

  pollResults.forEach(result => {
    pollAnswersContainer.insertAdjacentHTML('beforeend',
    `<div class = 'poll__answer'>
      ${result.answer}:
      <span class = 'poll__result'>${result.votes}%</span>
    </div>`);
  })
}





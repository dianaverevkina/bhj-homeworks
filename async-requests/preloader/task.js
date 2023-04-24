const loader = document.querySelector('.loader');
const items = document.getElementById('items');

//Сохраненные данные курса валют
const savedExchangeRate = localStorage.getItem('exchangeRate');

if (savedExchangeRate) {
  items.innerHTML = savedExchangeRate;
  getExchangeRate('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
} else {
  loader.classList.add('loader_active');
  getExchangeRate('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
}

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

//Отправить запрос на получение данных курса валют
function getExchangeRate(url) {

  fetch(url)  
    .then(checkStatus)  
    .then(data => {
      console.log('Загрузка завершена', data);
      return data;
    }).then(loadExchangeRate)
    .catch(error => console.log('Ошибка', error));
}

//Загрузить данные курса валют на веб-странице
function loadExchangeRate(exchangeRateData) {
  if (loader.classList.contains('loader_active')) loader.classList.remove('loader_active');
    
  exchangeRateData = exchangeRateData.response.Valute;

  for (let value of Object.values(exchangeRateData)) {
    let exchangeRate = document.createElement('div');
    exchangeRate.classList.add('item');
    exchangeRate.innerHTML = `<div class="item__code">
        ${value.CharCode}
      </div>
      <div class="item__value">
        ${value.Value}
      </div>
      <div class="item__currency">
        руб.
      </div>`;
    items.append(exchangeRate);
  }

  storeCart();
}

// //Сохранить данные 
function storeCart() {
  let html = items.innerHTML;
  localStorage.setItem('exchangeRate', html);
}

// localStorage.clear()









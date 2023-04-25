const signInContainer = document.querySelector('.signin')
const signInForm = document.forms.signin__form;
const loginInput = signInForm.login;
const passwordInput = signInForm.password;
const buttonSend = signInForm.querySelector('.btn');
 
const welcome = document.querySelector('.welcome');
const user = welcome.querySelector('.user_id');

const logout = document.querySelector('.logout');
const logoutBtn = logout.querySelector('.logout__btn');

let savedUser = localStorage.getItem('user');

if (savedUser) showWelcome(savedUser);

//Показать приветствие
function showWelcome(id) {
  user.textContent = id;

  signInContainer.classList.remove('signin_active');

  welcome.classList.add('welcome_active');
  logout.classList.add('logout_active');
}

signInForm.addEventListener('submit', sendAuthFormData);

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

//Отправить данные формы
function sendAuthFormData(e) {
  e.preventDefault();

  let url = 'https://students.netoservices.ru/nestjs-backend/auth';
  let formData = new FormData(document.forms.signin__form);

  fetch(url, {
    method: 'POST',
    body: formData, 
  }).then(checkStatus) 
  .then(logIn)
  .catch(error => console.log('Ошибка', error));
}

//Войти
function logIn(result) {
  console.log(result);
  if (!result.success) {
    alert('Неверный логин или пароль.');
    loginInput.value = '';
    passwordInput.value = '';
    return;
  }

  const userId = result.user_id;
  storeUser(userId);
  showWelcome(userId);
}

//Сохранить пользователя
function storeUser(value) {
  localStorage.setItem('user', value);
}

logoutBtn.addEventListener('click', logOut);

//Разлогиниться
function logOut() {

  welcome.classList.remove('welcome_active');
  logout.classList.remove('logout_active');
  
  signInContainer.classList.add('signin_active');

  localStorage.removeItem('user');
}




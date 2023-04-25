const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close');

let cookie = getCookie('modal');

//Получить cookie
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (!cookie) showModal();

//Показать модальное окно
function showModal() {
  modal.classList.add('modal_active');
  modalClose.addEventListener('click', closeModal);
}

//Закрыть модальное окно
function closeModal() {
  modal.classList.remove('modal_active');
  setCookie('modal', 'close', {samesite: 'lax'});
}

//Установить cookie
function setCookie(name, value, options={}) {

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
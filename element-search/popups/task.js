let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modalsClose = Array.from(document.querySelectorAll('.modal__close.modal__close_times'));
let showSuccess = document.querySelector('.show-success');


modalMain.classList.add('modal_active'); 

modalsClose.forEach(item => {
  item.onclick = () => {
    item.closest('.modal').classList.remove('modal_active');
  }
})

show__success.onclick = () => {
  modalSuccess.classList.add('modal_active');
  modalMain.classList.remove('modal_active');
}
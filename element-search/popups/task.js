let modal_main = document.getElementById('modal_main');
let modal_success = document.getElementById('modal_success');
let modals__close = Array.from(document.querySelectorAll('.modal__close.modal__close_times'));
let show__success = document.querySelector('.show-success');


modal_main.classList.add('modal_active'); 

modals__close.forEach(item => {
  item.onclick = () => {
    item.closest('.modal').classList.remove('modal_active');
  }
})

show__success.onclick = () => {
  modal_success.classList.add('modal_active');
  modal_main.classList.remove('modal_active');
}
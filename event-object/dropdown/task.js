let dropdownChoice = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItems = [...document.querySelectorAll('.dropdown__item')];

dropdownChoice.addEventListener('click', function() {
  dropdownList.classList.toggle('dropdown__list_active');
})


dropdownItems.forEach(item => {
  item.addEventListener('click', function(event) {
    dropdownChoice.textContent = this.textContent;
    dropdownList.classList.remove('dropdown__list_active');
    event.preventDefault();
  });
})

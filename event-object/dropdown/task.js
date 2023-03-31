let dropdown = document.querySelector('.dropdown');
let dropdownChoice = dropdown.querySelector('.dropdown__value');
let dropdownList = dropdown.querySelector('.dropdown__list');
let dropdownItems = [...dropdown.querySelectorAll('.dropdown__item')];


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

let mainMenu = document.querySelector('.menu_main')
let mainMenuLinks = mainMenu.querySelectorAll('.menu__link');

function clickMainMenuLinks(event) {
  let link = event.target;
  let item = link.closest('.menu__item');
  let subMenu = item.querySelector('.menu_sub');
  // debugger;
  if (!subMenu) {
    return;
  }
  if (subMenu.classList.contains('menu_active')) {       
    subMenu.classList.remove('menu_active');
    event.preventDefault();
    return;
  }
  
  let subMenus = [...mainMenu.querySelectorAll('.menu_sub')];

  subMenus.forEach(subMenu => subMenu.classList.remove('menu_active'))
  subMenu.classList.add('menu_active');
  event.preventDefault();
}

mainMenuLinks.forEach(link => link.addEventListener('click', clickMainMenuLinks));

let addMenu = document.querySelector('.menu_add');
let addMenuLinks = addMenu.querySelectorAll('.menu__link');

function clickAddMenuLinks(event) {
  let link = event.target;
  let item = link.closest('.menu__item');
  let subMenu = item.querySelector('.menu_sub');
  // debugger;
  if (!subMenu) {
    return;
  }
  if (subMenu.classList.contains('menu_active')) {       
    subMenu.classList.remove('menu_active');
    event.preventDefault();
    return;
  }
  
  let subMenus = [...addMenu.querySelectorAll('.menu_sub')];

  subMenus.forEach(subMenu => subMenu.classList.remove('menu_active'))
  subMenu.classList.add('menu_active');
  event.preventDefault();
}

addMenuLinks.forEach(link => link.addEventListener('click', clickAddMenuLinks));

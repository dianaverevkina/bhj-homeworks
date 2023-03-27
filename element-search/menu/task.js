let menu__links = Array.from(document.querySelectorAll('.menu__link'));
let subMenus = Array.from(document.querySelectorAll('.menu_sub'));

menu__links.forEach( link => {
  link.onclick = () => {
    subMenus.forEach(subMenu => subMenu.classList.remove('menu_active'));
    link.nextElementSibling.classList.add('menu_active');
    return false;
  }
})

let menuElement = document.querySelector('.menu');
let menuLinks = Array.from(menuElement.querySelectorAll('.menu__link'));
let subMenus = Array.from(menuElement.querySelectorAll('.menu_sub'));
console.log(menuLinks);

menuLinks.forEach( link => {
    link.onclick = () => {
      let subMenu = link.nextElementSibling;
      if (!link.nextElementSibling) return;
      if (subMenu.classList.contains('menu_active')) {
        subMenu.classList.remove('menu_active');
        return;
      }
      subMenus.forEach(subMenu => subMenu.classList.remove('menu_active'));
      subMenu.classList.add('menu_active');
      return false; 
    }
})


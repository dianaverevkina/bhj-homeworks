let tabsNav = document.getElementById('tabs1');
let tabs = [...tabsNav.querySelectorAll('.tab')];
let tabsContents = [...tabsNav.querySelectorAll('.tab__content')];

tabs.forEach((tab, index) => {
  tab.addEventListener('click', function() {
    if (tab.classList.contains('.tab_active')) {
      return;
    }
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tab.classList.add('tab_active');
    tabsContents.forEach(content => content.classList.remove('tab__content_active'));
    tabsContents[index].classList.add('tab__content_active');
  })
})

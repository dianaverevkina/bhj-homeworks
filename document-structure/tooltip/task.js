const hasTooltips = document.querySelectorAll('.has-tooltip');

//Создать элемент подсказки
function createTooltipElement(el) {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerHTML = el.title;
  tooltip.dataset.position = 'bottom';

  el.append( tooltip );
  positionTooltip(el, tooltip);

  return tooltip;
}


//Позицонировать подсказку
function positionTooltip(el, tooltip) {
  let { top, left, right } = el.getBoundingClientRect();

  if ( tooltip.dataset.position === 'bottom' ) {
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + el.offsetHeight + 'px';
  }

  if ( tooltip.dataset.position === 'top' ) {
    tooltip.style.left = left + 'px';
    tooltip.style.top = top +'px';
    tooltip.style.transform = 'translateY(-100%)';
  }

  if ( tooltip.dataset.position === 'right' ) {
    tooltip.style.left = right + 'px';
    tooltip.style.top = top  + 'px';
  }

  if ( tooltip.dataset.position === 'left' ) {
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.style.transform = 'translateX(-100%)';
  }
}

//Открыть подсказку
function showTooltip(e) {
  e.preventDefault();

  const openedTooltip = this.querySelector('.tooltip');

  if ( openedTooltip ) {
    openedTooltip.remove();
    return;
  }

  const tooltips = document.querySelectorAll( '.tooltip' );
  tooltips.forEach( tip => tip.remove() );

  const tooltip = createTooltipElement(this);
  tooltip.classList.add( 'tooltip_active' );
}

hasTooltips.forEach(hasTooltip => hasTooltip.addEventListener( 'click', showTooltip ));

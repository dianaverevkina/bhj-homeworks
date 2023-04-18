const hasTooltips = document.querySelectorAll('.has-tooltip');

function createTooltipElement(el) {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.dataset.position = '';

  let coords = getCoords(el);
  
  tooltip.style.left = coords.left + 'px';
  tooltip.style.top = coords.top + el.offsetHeight + 'px';

  tooltip.innerHTML = el.title;
  el.after(tooltip);

  return tooltip;
}

function getCoords(el) {
  const { top, left} = el.getBoundingClientRect();
  return { top, left };
}

function showTooltip(e) {
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tip => tip.remove());

  const tooltip = createTooltipElement(this);
  
  tooltip.classList.add('tooltip_active');
  e.preventDefault();
}

hasTooltips.forEach(hasTooltip => hasTooltip.addEventListener('click', showTooltip));
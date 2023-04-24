const hasTooltips = document.querySelectorAll('.has-tooltip');

function createTooltipElement(el) {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerHTML = el.title;
  el.after(tooltip);

  let coords = el.getBoundingClientRect();
  
  if (coords.top < 30) {
  tooltip.style.left = coords.left + 'px';
  tooltip.style.top = coords.top + el.offsetHeight + 'px';
  } else {
    tooltip.style.left = coords.left + 'px';
    tooltip.style.top = coords.top +'px';
    tooltip.dataset.position = 'top';
  }

  return tooltip;
}

function showTooltip(e) {
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tip => tip.remove());

  const tooltip = createTooltipElement(this);
  
  tooltip.classList.add('tooltip_active');
  e.preventDefault();
}

hasTooltips.forEach(hasTooltip => hasTooltip.addEventListener('click', showTooltip));

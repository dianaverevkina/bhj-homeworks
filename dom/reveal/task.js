let reveals = document.querySelectorAll('.reveal');

for (const reveal of reveals) {
  const showText = () => {
    let revealTop = reveal.getBoundingClientRect().top;
    let revealBottom = reveal.getBoundingClientRect().bottom;
    let revealHeight = revealBottom - revealTop;
    if (revealTop < window.innerHeight - revealHeight || revealBottom < window.innerHeight) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  }

  window.addEventListener('scroll', showText);
}
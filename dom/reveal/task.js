let reveals = document.querySelectorAll('.reveal');

for (const reveal of reveals) {
  const showText = () => {
    const { innerHeight } = window;
    const { top } = reveal.getBoundingClientRect();
    console.log(top);
    if (top < innerHeight && top > 0) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  }

  window.addEventListener('scroll', showText);
}
let arrowLeft = document.querySelector('.slider__arrow_prev');
let arrowRight = document.querySelector('.slider__arrow_next');
let slides = [...document.querySelectorAll('.slider__item')];
let currentSlide = 0;

let dots = [...document.querySelectorAll('.slider__dot')];

//Показ слайда
function showSlide(numberOfSlide) {
  slides[currentSlide].classList.remove('slider__item_active');
  currentSlide = (numberOfSlide + slides.length) % slides.length;
  slides[currentSlide].classList.add('slider__item_active');
}
//Переключение слайдера вправо
arrowRight.onclick = () => {
  showSlide(currentSlide + 1);
  moveDot(currentSlide);
}

//Переключение слайдера влево
arrowLeft.onclick = () => {
  showSlide(currentSlide - 1);
  moveDot(currentSlide);
}

//Смена точки при переключении боковой навигации
function moveDot(dotNav) {
  dots.forEach(dot => {
    dot.classList.remove('slider__dot_active');
  });
  dots[dotNav].classList.add('slider__dot_active');
}

// Смена слайда при клике по точке
dots.forEach((dot, index) => {
  dot.onclick = () => {
    slides[currentSlide].classList.remove('slider__item_active');
    currentSlide = index;
    moveDot(currentSlide);
    slides[currentSlide].classList.add('slider__item_active');
  } 
})

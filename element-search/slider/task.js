let arrowLeft = document.querySelector('.slider__arrow_prev');
let arrowRight = document.querySelector('.slider__arrow_next');
let slides = [...document.querySelectorAll('.slider__item')];

let dots = [...document.querySelectorAll('.slider__dot')];

//Показ слайда
function showSlide(numberOfSlide, shiftDirection) {
  slides[numberOfSlide].classList.remove('slider__item_active');
  currentSlide = (numberOfSlide + shiftDirection + slides.length) % slides.length;
  slides[currentSlide].classList.add('slider__item_active');
  moveDot(currentSlide);
}

//Смена точки при переключении боковой навигации
function moveDot(dotNav) {
  dots.forEach(dot => {
    dot.classList.remove('slider__dot_active');
  });
  dots[dotNav].classList.add('slider__dot_active');
}

// //Переключение слайдера вправо
arrowRight.onclick = () => {
  let currentSlide = slides.findIndex(slide => slide.className === 'slider__item slider__item_active');
  showSlide(currentSlide, 1);
}

// //Переключение слайдера влево
arrowLeft.onclick = () => {
  let currentSlide = slides.findIndex(slide => slide.className === 'slider__item slider__item_active');
  showSlide(currentSlide, (-1));
}

// // Смена слайда при клике по точке
dots.forEach((dot, index) => {
  dot.onclick = () => {
    let currentSlide = slides.findIndex(slide => slide.className === 'slider__item slider__item_active');
    slides[currentSlide].classList.remove('slider__item_active');
    currentSlide = index;
    moveDot(currentSlide);
    slides[currentSlide].classList.add('slider__item_active');
  } 
})




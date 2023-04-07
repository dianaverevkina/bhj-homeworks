let book = document.getElementById('book');
let controlsFontSize = [...book.querySelectorAll('.font-size')];
let controlTextColor = book.querySelector('.book__control_color'); 
let textColors = [...controlTextColor.querySelectorAll('.color')]
let controlBgColor = book.querySelector('.book__control_background');
let bgColors = [...controlBgColor.querySelectorAll('.color')];


//Установка размера шрифта
controlsFontSize.forEach(controlFs => {

  const setFontSize = (e) => {
    controlsFontSize.forEach(item => {
      item.classList.remove('font-size_active');
    });

    book.classList.remove('book_fs-small', 'book_fs-big');

    controlFs.classList.add('font-size_active');
    e.preventDefault();

    let fontSize = controlFs.dataset.size;
    if (fontSize === 'small') {
      book.classList.add('book_fs-small');
    } else if (fontSize === 'big') {
      book.classList.add('book_fs-big');
    } 
  }

  controlFs.addEventListener('click', setFontSize);
})

//Установка цвета текста
textColors.forEach(textColor => {

  const setTextColor = (e) => {
    textColors.forEach(item => {
      item.classList.remove('color_active');
    });

    textColor.classList.add('color_active');
    e.preventDefault();

    book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

    let color = textColor.dataset.textColor;
    switch (color) {
      case 'black':
        book.classList.add('book_color-black');
        break;
      case 'gray':
        book.classList.add('book_color-gray');
        break;
      case 'whitesmoke':
        book.classList.add('book_color-whitesmoke');
        break;
    }
  }

  textColor.addEventListener('click', setTextColor);
})

//Установка цвета фона
bgColors.forEach(bgColor => {

  const setBgColor = (e) => {
    bgColors.forEach(item => {
      item.classList.remove('color_active');
    });

    bgColor.classList.add('color_active');
    e.preventDefault();

    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

    let color = bgColor.dataset.bgColor;
    switch (color) {
      case 'black':
        book.classList.add('book_bg-black');
        break;
      case 'gray':
        book.classList.add('book_bg-gray');
        break;
      case 'white':
        book.classList.add('book_bg-white');
        break;
    }
  }

  bgColor.addEventListener('click', setBgColor);
})
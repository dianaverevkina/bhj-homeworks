const cart = document.querySelector('.cart');
const savedCart = localStorage.getItem('myCart');

if (savedCart) {
  cart.innerHTML = savedCart;

  const cartProductDeletes = cart.querySelectorAll('.cart__product-delete');
  cartProductDeletes.forEach(productDelete => productDelete.addEventListener('click', deleteCartProduct));
}

//Удалить продукт из корзины
function deleteCartProduct() {
  const cartProduct = this.closest('.cart__product');
  cartProduct.remove();

  storeCart();
}

//Сохранить данные корзины локально
function storeCart() {
  let html = cart.innerHTML;
  localStorage.setItem('myCart', html);
}

const products = document.querySelector('.products');

//Уменьшить количество товара
function decreaseProductQuantity() {
  const productQuantityValue = findValue(this);
  if (productQuantityValue.textContent === '1') return;
  --productQuantityValue.textContent;
}

function findValue(el) {
  const productQuantityValue = el.closest('.product__quantity').querySelector('.product__quantity-value');
  return productQuantityValue;
}

//Увеличить количество товара
function increaseProductQuantity() {
  const productQuantityValue = findValue(this);
  ++productQuantityValue.textContent;
}

//Изменить количество товара
function changeProductQuantity() {
  const productQuantityDec = products.querySelectorAll('.product__quantity-control_dec');
  productQuantityDec.forEach(dec => dec.addEventListener('click', decreaseProductQuantity));

  const productQuantityInc = products.querySelectorAll('.product__quantity-control_inc');
  productQuantityInc.forEach(inc => inc.addEventListener('click', increaseProductQuantity));
}

changeProductQuantity();

const productAddBtns = products.querySelectorAll('.product__add');

const cartContainer = cart.querySelector('.cart__products');

//Найти товар в корзине
function findCartProduct(el) {
  return [...cartContainer.querySelectorAll('.cart__product')].filter(cartProduct => cartProduct.dataset.id === el.dataset.id)[0];
}

//Добавить товар в корзину
function addToCart() {

  const product = this.closest('.product');
  const { src } = product.querySelector('.product__image');
  const { textContent : value } = findValue(this);

  const addedCartProduct = findCartProduct(product);

  if (addedCartProduct) {
    createAnimation(product, addedCartProduct);
    addedCartProduct.querySelector('.cart__product-count').textContent = +addedCartProduct.querySelector('.cart__product-count').textContent + (+value);
    return;
  }

  cartContainer.innerHTML += `
    <div class="cart__product" data-id=${product.dataset.id}>
      <img class="cart__product-image" src=${src}>
      <div class="cart__product-count">${value}</div>
      <div class="cart__product-delete">
        <img class="cart__product-delete-image" src="cross.png">
      </div>
    </div>`;

  const addedNewCartProduct = findCartProduct(product);
  createAnimation(product, addedNewCartProduct);
  
  const cartProductDelete = addedNewCartProduct.querySelector('.cart__product-delete');
  cartProductDelete.addEventListener('click', deleteCartProduct);

  storeCart();
}

productAddBtns.forEach(btn => btn.addEventListener('click', addToCart));


//Создает анимацию перемещения товара в корзину
function createAnimation(el, cartProduct) {
  const productImg = el.querySelector('.product__image');
  const { top : productTop, left : productLeft } = productImg.getBoundingClientRect();

  let productImgCopy = productImg.cloneNode(false);

  productImgCopy.position = 'absolute';
  productImgCopy.style.left = productLeft + 'px';
  productImgCopy.style.top = productTop + 'px';

  productImg.after(productImgCopy);

  const { top: cartProductTop, left: cartProductLeft } = cartProduct.getBoundingClientRect();
  let distanceY = cartProductTop - productTop; 
  let distanceX = cartProductLeft - productLeft;

  animate({
    duration: 200,
    draw(progress) {
      productImgCopy.style.left = progress * distanceX + 'px';
      productImgCopy.style.top = progress * distanceY + 'px';
    },
  });

  let timertId = setTimeout(() => {
    clearTimeout(timertId);
    productImgCopy.remove();
  }, 200);
}

function animate({duration, draw}) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timeFraction;
    draw(progress); 

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}







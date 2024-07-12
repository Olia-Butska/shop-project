//div всередині кошика, в який додаємо товари
const cartWrapper = document.querySelector('.cart-wrapper');

//відстежуємо клік на сторінці
window.addEventListener('click', function(event){
   //перевірка що відбувся клік при натисканні на кнопку "до кошика"
   if (event.target.hasAttribute('data-cart')){
   //знаходимо картку з товаром, всередині якої був клік
   const card = event.target.closest('.card');


   const productInfo = {
    id: card.dataset.id,
    imgSrc: card.querySelector('.product-img').getAttribute('src'),
    title: card.querySelector('.item-title').innerText,
    itemsInBox: card.querySelector('[data-items-in-box]').innerText,
    weight: card.querySelector('.price__weight').innerText,
    price: card.querySelector('.price__currency').innerText,
    counter: card.querySelector('[data-counter]').innerText,
    };
}
});
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
    
	//перевіряти чи є вже такий товар у кошику
	const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
	console.log(itemInCart);
    
	//якщо товар є в кошику
	if (itemInCart){
		const counterElement = itemInCart.querySelector('[data-counter]');
		counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
	}else{
		//if not
	
    //зібрані дані підставимо в шаблон для товару в кошику
    const cartItemHTML =`<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;

    //відобразимо товар у кошику
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
	}

	card.querySelector('[data-counter]').innerText = '1';
    
	//відображення статусу кошика порожній/повний
	toggleCartStatus();
   }
   
});
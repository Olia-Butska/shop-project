calcCartPrice(){
   const cartItems = document.querySelector('.cart-item');

   cartItems.forEach(function (item){
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');

    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innertext);
    
   })

}
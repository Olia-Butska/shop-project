window.addEventListener('click', function(event){

    //оголошуємо змінну для лічильника
        let counter;
    
        if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
            //знаходимо обгортку лічильника
       const counterWrapper = event.target.closest('.counter-wrapper');
           
    
       //знаходимо дів з числом лічильника
        counter = counterWrapper.querySelector('[data-counter]');  
    
        }

        // чи є елемент кнопкою +
   if (event.target.dataset.action === 'plus'){
    counter.innerText = ++counter.innerText;
}


// чи є елемент кнопкою -
if (event.target.dataset.action === 'minus'){
 
//перевірка на товар який знаходиться в кошику   
 if (parseInt(counter.innerText) > 1){
     counter.innerText = --counter.innerText;
 }else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
     console.log('IN CART!!!!');

     event.target.closest('.cart-item').remove();
 }
 
 
 
}
    });
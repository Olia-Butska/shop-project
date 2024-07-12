window.addEventListener('click', function(event){

    //оголошуємо змінну для лічильника
        let counter;
    
        if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
            //знаходимо обгортку лічильника
       const counterWrapper = event.target.closest('.counter-wrapper');
           
    
       //знаходимо дів з числом лічильника
        counter = counterWrapper.querySelector('[data-counter]');  
    
        }
    });
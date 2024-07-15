
// find elements on the page
const btnMinus = document.querySelector('[data-action="minus"]');

const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


btnMinus.addEventListener('click', function(){
    console.log('Minus click');

    //counter is greater than 1
    if (parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText;
    }

   
});


// find click on btnPlus
btnPlus.addEventListener('click', function(){
    console.log('Plus click');
    counter.innerText = ++counter.innerText;
})
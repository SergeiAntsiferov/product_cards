import { products } from './products.js';

const inputName = document.getElementById('name');
const inputDescription = document.getElementById('description');
const inputLink = document.getElementById('link');
const inputPrice = document.getElementById('price');
const button = document.querySelector('.button');

//Alerts
const nameAlert = document.querySelector('.input-name-error');
const linkAlert = document.querySelector('.input-link-error');
const priceAlert = document.querySelector('.input-price-error');


function buttonDisable () {
    button.classList.remove('button_enabled');
    button.disabled = true
}


//Name check
inputName.addEventListener('input', (e) => { 
    if (e.target.value) {
        inputName.classList.remove('input-name_red');
        nameAlert.innerHTML = ''        
    } else {
        inputName.classList.add('input-name_red');
        nameAlert.innerHTML = 'Поле является обязательным'
    }
})

//Link check
inputLink.addEventListener('input', (e) => { 
    if (e.target.value) {
        inputLink.classList.remove('input-link_red');
        linkAlert.innerHTML = ''
    } else {
        inputLink.classList.add('input-link_red');
        linkAlert.innerHTML = 'Поле является обязательным'
    }
})

//Price check
inputPrice.addEventListener('input', (e) => { 
    if (e.target.value) {
        inputPrice.classList.remove('input-price_red');
        priceAlert.innerHTML = ''
    } else {
        inputPrice.classList.add('input-price_red');
        priceAlert.innerHTML = 'Поле является обязательным'
    }
})

//Fields Validation
window.addEventListener('input', () => {
    if (inputName.value && inputLink.value && inputPrice.value) {
        button.classList.add('button_enabled');
        button.disabled = false
    } else {
        buttonDisable()
    }
})

//Create new card
button.addEventListener('click', (event) => {
    event.preventDefault();
    const newCard = {
        image: inputLink.value,
        name: inputName.value,
        description: inputDescription.value,
        price: inputPrice.value
    };
    products.push(newCard);
    //clear fields
    inputLink.value = inputName.value = inputDescription.value = inputPrice.value = '';
    buttonDisable();
    console.log(products)
})
    



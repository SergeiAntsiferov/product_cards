// import { products } from './products.js';
import { getProductLS, showCards } from './mapping.js'

const inputName = document.getElementById('name');
const inputDescription = document.getElementById('description');
const inputLink = document.getElementById('link');
const inputPrice = document.getElementById('price');
const createButton = document.querySelector('.button');

//Alerts
const nameAlert = document.querySelector('.input-name-error');
const linkAlert = document.querySelector('.input-link-error');
const priceAlert = document.querySelector('.input-price-error');

function buttonDisable () {
    createButton.classList.remove('button_enabled');
    createButton.disabled = true
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

inputPrice.addEventListener('input', (e) => {
    
    const formated = String((e.target.value).replace(/ /g, '')).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    e.target.value = formated;

})

//Fields Validation
window.addEventListener('input', () => {
    if (inputName.value && inputLink.value && inputPrice.value) {
        createButton.classList.add('button_enabled');
        createButton.disabled = false;
    } else {
        buttonDisable()
    }
})

//Create new card
createButton.addEventListener('click', (event) => {
    event.preventDefault();
    const productsLS = getProductLS()
    const newCard = {
        id: String(new Date().getTime()),
        image: inputLink.value,
        name: inputName.value,
        description: inputDescription.value,
        price: `${inputPrice.value} руб.`
    };
    localStorage.setItem('products', JSON.stringify([newCard, ...productsLS,]));
    showCards();
    //clear fields
    inputLink.value = inputName.value = inputDescription.value = inputPrice.value = '';
    buttonDisable();
    addELforDeleteButton();
})


//Delete card
export function addELforDeleteButton() {
    const deleteButton = document.querySelectorAll('.card__delete'); //array
    deleteButton.forEach( element => element.addEventListener('click', (e) => {
        const productsLS = getProductLS()
        const result = productsLS.filter((product) => product.id !== e.target.id) 
        localStorage.setItem('products', JSON.stringify([...result]))
        showCards();
    }))
}
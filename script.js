// import { products } from './products.js';
import { productsLS } from './mapping.js'

const inputName = document.getElementById('name');
const inputDescription = document.getElementById('description');
const inputLink = document.getElementById('link');
const inputPrice = document.getElementById('price');
const createButton = document.querySelector('.button');
const deleteButton = document.querySelectorAll('.card__delete'); //array


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

// inputPrice.addEventListener('input', (e) => {
    
//   if ((e.target.value.trim()).length % 3 === 0) { 
//     e.target.value += " ";
//   }
// })

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
    const newCard = {
        image: inputLink.value,
        name: inputName.value,
        description: inputDescription.value,
        price: `${inputPrice.value} руб.`
    };
    localStorage.setItem('products', JSON.stringify([newCard, ...productsLS,]))
    window.location.reload();
    //clear fields
    inputLink.value = inputName.value = inputDescription.value = inputPrice.value = '';
    buttonDisable();
})


//Delete card
deleteButton.forEach( element => element.addEventListener('click', (e) => {
    const parent = e.target.parentElement; //get target parent
    const parentName = parent.querySelector('.card__name'); //get element with identifier
    const name = parentName.innerHTML; //get identifier for find in the array
    const result = productsLS.filter((product) => product.name !== name) 
    localStorage.setItem('products', JSON.stringify([...result]))
    window.location.reload();
}))

//sort increase 
// function sortIncrease() {
//     productsLS.sort((a, b) => {

//         if (a.price > b.price) {
//             return 1;
//         }
//         if (a.price < b.price) {
//             return -1;
//         }
//         return 0;
//     })
//     localStorage.setItem('products', JSON.stringify([...productsLS]))
//     window.location.reload();
// }

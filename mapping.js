import { products } from './products.js';
import { addELforDeleteButton } from './script.js';


export function getProductLS() {
    return JSON.parse(localStorage.getItem('products'))
}

const cardList = document.querySelector('.cards')

window.addEventListener('load', showCards(), addELforDeleteButton())

function arrayMapping(array) {

    array.forEach( (product, index) => {
        const card = `<div class="card">
            <img class="card__delete" src="images/delete.png" alt="delete" id="${product.id}"/>
            <img class="card__image" src=${product.image} alt=${product.name}/>
            <h3 class="card__name">${product.name}</h3>
            <p class="card__description">${product.description}</p>
            <span class="card__price">${product.price}</span>
            </div>`
        if (index === 0) {
            cardList.innerHTML = card
        } else {
            cardList.innerHTML += card
        }    
    })
}

export function showCards() {
    const productsLS = getProductLS()
        if (productsLS) {
            arrayMapping(productsLS);
        } else {
            arrayMapping(products);
            localStorage.setItem('products', JSON.stringify(products));
        }
    }





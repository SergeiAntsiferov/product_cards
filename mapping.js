import { products } from './products.js';

export const productsLS = JSON.parse(localStorage.getItem('products'))

const cardList = document.querySelector('.cards')
const card = document.createElement('div');

window.addEventListener('load', showCards())

function arrayMapping(array) {
    array.map( (product) => {
        return (
            cardList.innerHTML = card.innerHTML +=
            `<div class="card">
            <img class="card__delete" src="images/delete.png" alt="delete"/>
            <img class="card__image" src=${product.image} alt="${product.name}"/>
            <h3 class="card__name">${product.name}</h3>
            <p class="card__description">${product.description}</p>
            <span class="card__price">${product.price}</span>
            </div>`
        )
    })
}

export function showCards() {
        if (productsLS) {
            arrayMapping(productsLS);
        } else {
            arrayMapping(products);
            localStorage.setItem('products', JSON.stringify(products));
        }
    }





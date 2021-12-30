import { products } from './products.js';

const cardList = document.querySelector('.cards')
const card = document.createElement('div')
cardList.appendChild(card)
card.className = 'card'

window.addEventListener('load', () => {
    products.map( (product)=> {
        return (
            card.innerHTML = `
            <h3>${product.name}</h3>
            <div>${product.description}</div>
            <h2>${product.price}</h2>`
       )
    })
})


    
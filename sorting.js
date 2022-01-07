import { getProductLS, showCards } from './mapping.js'

const select = document.getElementById('filter')

function priceToNumber(element) {
    return parseInt(element.price.replace(/ /g, ''))
}

function sortIncrease() {
    const productsLS = getProductLS()
    productsLS.sort((a, b) => {
        
        if (priceToNumber(a) > priceToNumber(b)) {
            return 1;
        }
        if (priceToNumber(a) < priceToNumber(b)) {
            return -1;
        }
        return 0;
    })
    localStorage.setItem('products', JSON.stringify([...productsLS]))
    showCards();
}

function sortDecrease() {
    const productsLS = getProductLS()
    productsLS.sort((a, b) => {
        
        if (priceToNumber(a) > priceToNumber(b)) {
            return -1;
        }
        if (priceToNumber(a) < priceToNumber(b)) {
            return 1;
        }
        return 0;
    })
    localStorage.setItem('products', JSON.stringify([...productsLS]))
    showCards();
}

export function sortByName() {

    const productsLS = getProductLS()
    productsLS.sort((a, b) => {
        
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
    localStorage.setItem('products', JSON.stringify([...productsLS]))
    showCards();
}


select.addEventListener('change', (e) => {

    switch (e.target.value) {
        case 'increase':
            sortIncrease();
            break;
        case 'decrease': 
            sortDecrease();
            break; 
        case 'by-name':
            sortByName();
            break;
        default:
            sortByName();
    }
})

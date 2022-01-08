import { getProductLS, showCards } from './mapping.js'

//Alerts
const nameAlert = document.querySelector('.input-name-error');
const linkAlert = document.querySelector('.input-link-error');
const priceAlert = document.querySelector('.input-price-error');

//Name check
const inputName = document.getElementById('name');
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
const inputLink = document.getElementById('link');
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
const inputPrice = document.getElementById('price');
inputPrice.addEventListener('input', (e) => { 
    if (e.target.value) {
        inputPrice.classList.remove('input-price_red');
        priceAlert.innerHTML = ''
    } else {
        inputPrice.classList.add('input-price_red');
        priceAlert.innerHTML = 'Поле является обязательным'
    }
})

//Separate mask
inputPrice.addEventListener('input', (e) => {
    const formated = String((e.target.value).replace(/ /g, '')).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    e.target.value = formated;
    
})

//Fields Validation
const createButton = document.querySelector('.button');
const form = document.querySelector('.form');
form.addEventListener('input', () => {
    if (inputName.value && inputLink.value && inputPrice.value) {
        createButton.classList.add('button_enabled');
        createButton.disabled = false;
    } else {
        createButtonDisable()
    }
})

//Disable create button
function createButtonDisable() {
    createButton.classList.remove('button_enabled');
    createButton.disabled = true
}

//Create new card
createButton.addEventListener('click', (event) => {
    event.preventDefault();
    const inputDescription = document.getElementById('description');
    const productsLS = getProductLS()
    const newCard = {
        id: String(new Date().getTime()), //get unique id
        image: inputLink.value,
        name: inputName.value,
        description: inputDescription.value,
        price: `${inputPrice.value} руб.`
    };
    localStorage.setItem('products', JSON.stringify([newCard, ...productsLS,]));
    showCards();

    //clear fields
    inputLink.value = inputName.value = inputDescription.value = inputPrice.value = '';
    createButtonDisable();
    addELforDeleteButton();
})


//Add Event Listener for each delete button
export function addELforDeleteButton() {
    const deleteButtons = document.querySelectorAll('.card__delete'); //array
    deleteButtons.forEach( (element) => {
        element.addEventListener('click', (e) => {
            //Delete card
            const productsLS = getProductLS();
            const result = productsLS.filter((product) => product.id !== e.target.id); 
            localStorage.setItem('products', JSON.stringify([...result]));
            showCards();
        })
    })
}

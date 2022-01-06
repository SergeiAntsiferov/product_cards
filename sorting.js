const select = document.getElementById('filter')


select.addEventListener('change', () => {
    selectHandler()
})

function selectHandler() {
    console.log('1123')
}
// sort increase 
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
// }

//Task 2: Fetch Products with .then()

const productContainer = document.getElementById('product-container');

function fetchProductsThen(){
    fetch('https://www.course-api.com/javascript-store-products')
    .then((response) => {
        return response.json();})
    .then(products =>{
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.classList.add('product');
            listItem.textContent = `${product.fields.name} - $${product.fields.price}`;
            productContainer.appendChild(listItem);
            console.log(product.fields.name)
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
fetchProductsThen()

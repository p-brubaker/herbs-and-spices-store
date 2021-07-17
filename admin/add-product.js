import { products } from '../data/products.js';

import { getProducts, setProducts } from '../utils/utils.js';

const nameInput = document.getElementById('product-name');
const categoryInput = document.getElementById('category');
const productDescription = document.getElementById('product-description');
const productImageInput = document.getElementById('product-image');
const productPriceInput = document.getElementById('product-price');
const productSubmit = document.getElementById('product-submit');

function getNewId(currentProducts) {
    
    return currentProducts.reduce((a, b) => {
        if (a.id > b.id) {
            return a;
        } else {
            return b;
        }
    }).id + 1;
} 

productSubmit.addEventListener('click', () => {

    let inventory = getProducts() || products;

    let newProduct = {};
    newProduct.name = nameInput.value;
    newProduct.category = categoryInput.value;
    newProduct.description = productDescription.value;
    newProduct.image = productImageInput.value;
    newProduct.id = getNewId(products);
    newProduct.price = Number(productPriceInput.value);
    inventory = [...inventory, newProduct];

    productPriceInput.value = '';
    categoryInput.value = '';
    productDescription.value = '';
    productImageInput.value = '';
    nameInput.value = '';

    setProducts(inventory);
});

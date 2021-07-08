import { products } from './products.js';
import { renderProduct } from './renderProducts.js';

const productList = document.getElementById('product-list');

for (let product in products) {
    productList.appendChild(renderProduct(products[product]));
}
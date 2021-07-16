import { products } from './data/products.js';
import { renderProduct } from './renderProducts.js';
import { getProducts, setProducts } from './utils.js';

const productList = document.getElementById('product-list');


const inventory = getProducts() || products;

for (let product in inventory) {
    productList.appendChild(renderProduct(inventory[product]));
}
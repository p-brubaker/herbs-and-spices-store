// herbs and spices data model
// id: a unique string that identifies the product
// name: user friendly name of the product
// image: image file path
// description: a longer discription of the product
// category: the category this product belongs to
// price: the price the user will pay

import { products } from './products.js';
import { renderProduct } from './renderProducts.js';

const productList = document.getElementById('product-list');

for (let product in products) {
    productList.appendChild(renderProduct(products[product]));
}
import { cart } from '../data/cart.js';
import { products } from '../data/products.js';
import { generateTableRow } from './render-line-items.js';
import { findById } from '../utils.js';

const tBody = document.getElementById('table-body');
for (let cartLineItem of cart) {
    let product = findById(products, cartLineItem.id);
    let currentRow = generateTableRow(cartLineItem, product);
    tBody.innerHTML += currentRow;
}
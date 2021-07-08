import { cart } from '../data/cart.js';
import { products } from '../data/products.js';
import { renderTableRow } from './render-line-items.js';
import { findById, calcOrderTotal, toUSD } from '../utils/utils.js';

export function renderCart(cart, products) {

    const tBody = document.getElementById('table-body');
    const tFoot = document.getElementById('table-foot');

    let tBodyContent = '';

    for (let cartLineItem of cart) {
        let product = findById(products, cartLineItem.id);
        let currentRow = renderTableRow(cartLineItem, product);
        tBodyContent += currentRow;
    }
    tFoot.innerHTML = `<tr><td></td><td></td><td>Order Total:</td><td>${toUSD(calcOrderTotal(cart, products))}</td></tr>`;
    tBody.innerHTML = tBodyContent;
}

renderCart(cart, products);



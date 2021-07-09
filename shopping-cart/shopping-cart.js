import { renderTableRow } from './render-line-items.js';
import { findById, calcOrderTotal, toUSD } from '../utils/utils.js';
import { getCart } from '../cart-api.js';
import { products } from '../data/products.js';

function renderCart(cart, products) {

    const tBody = document.getElementById('table-body');
    const tFoot = document.getElementById('table-foot');

    const tFootRow = document.createElement('tr');
    const orderTotalTd = document.createElement('td');
    orderTotalTd.colSpan = 3;
    orderTotalTd.textContent = 'Order Total:';
    tFootRow.appendChild(orderTotalTd);
    const calculatedTotal = document.createElement('td');
    calculatedTotal.textContent = toUSD(calcOrderTotal(cart, products));
    tFootRow.appendChild(calculatedTotal);
    tFoot.appendChild(tFootRow);

    let tBodyContent = [];

    for (let cartLineItem of cart) {
        let product = findById(products, cartLineItem.id);
        let currentRow = renderTableRow(cartLineItem, product);
        tBodyContent.push(currentRow);
    }
   
    for (let item of tBodyContent) {
        tBody.appendChild(item);
    }
}

renderCart(getCart(), products);



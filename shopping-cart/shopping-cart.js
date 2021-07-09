import { renderTableRow } from './render-line-items.js';
import { findById, calcOrderTotal, toUSD } from '../utils/utils.js';
import { getCart, setCart } from '../cart-api.js';
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
    tFoot.innerHTML = tFootRow.outerHTML;

    let tBodyContent = [];

    for (let cartLineItem of cart) {
        let product = findById(products, cartLineItem.id);
        let currentRow = renderTableRow(cartLineItem, product);
        tBodyContent.push(currentRow);
    }
   
    tBody.innerHTML = '';
    for (let item of tBodyContent) {
        tBody.appendChild(item);
    }
}

const placeOrderBtn = document.getElementById('place-order');
const clearCartBtn = document.getElementById('clear');

if (!getCart().length) { 
    placeOrderBtn.disabled = 'disabled';
    clearCartBtn.disabled = 'disabled';
}

placeOrderBtn.addEventListener('click', () => {
    if (window.confirm(JSON.stringify(getCart(), true, 2))) {
        setCart([]);
        renderCart([], products);
        placeOrderBtn.disabled = 'disabled';
        clearCartBtn.disabled = 'disabled';
    }
});
clearCartBtn.addEventListener('click', () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
        setCart([]);
        renderCart([], products);
        placeOrderBtn.disabled = 'disabled';
        clearCartBtn.disabled = 'disabled';
    }
});

renderCart(getCart(), products);



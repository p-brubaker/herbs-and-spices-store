import { calcItemTotal, toUSD } from '../utils.js';

export function renderTableRow(cartLineItem, product) {
    return `<tr><td>${product.name}</td><td>${toUSD(product.price)}</td><td>${cartLineItem.quantity}</td><td>${toUSD(calcItemTotal(product.price, cartLineItem.quantity))}</td></tr>`;
}

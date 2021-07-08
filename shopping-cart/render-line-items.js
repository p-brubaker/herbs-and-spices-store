import { calcItemTotal, toUSD } from '../utils.js';

export function generateTableRow(cartItem, product) {
    return `<tr><td>${product.name}</td><td>${toUSD(product.price)}</td><td>${cartItem.quantity}</td><td>${toUSD(calcItemTotal(product.price, cartItem.quantity))}</td></tr>`;
}


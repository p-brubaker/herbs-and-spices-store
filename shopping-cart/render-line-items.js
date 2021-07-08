import { toUSD } from '../utils/utils.js';

export function renderTableRow(cartItem, product) {
    return `<tr><td>${product.name}</td><td>${toUSD(product.price)}</td><td>${cartItem.quantity}</td><td>${toUSD(product.price * cartItem.quantity)}</td></tr>`;
}


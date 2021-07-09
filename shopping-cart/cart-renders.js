import { calcOrderTotal, toUSD, findById } from '../utils/utils.js';

export function renderTableRow(cartItem, product) {
    const tableRow = document.createElement('tr');
    
    const tableData1 = document.createElement('td');
    tableData1.textContent = product.name;
    tableRow.appendChild(tableData1);

    const tableData2 = document.createElement('td');
    tableData2.textContent = toUSD(product.price);
    tableRow.appendChild(tableData2);

    const tableData3 = document.createElement('td');
    tableData3.textContent = cartItem.quantity;
    tableRow.appendChild(tableData3);

    const tableData4 = document.createElement('td');
    tableData4.textContent = toUSD(product.price * cartItem.quantity);
    tableRow.appendChild(tableData4);
    return tableRow;
}

export function renderCart(cart, products) {

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

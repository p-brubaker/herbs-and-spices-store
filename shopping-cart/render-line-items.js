import { toUSD } from '../utils/utils.js';

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


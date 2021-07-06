// herbs and spices data model
// id: a unique string that identifies the product
// name: user friendly name of the product
// image: image file path
// description: a longer discription of the product
// category: the category this product belongs to
// price: the price the user will pay

import { products } from './products.js';

function renderProduct(product) {
    const li = document.createElement('li');
    const productDiv = document.createElement('div.store-item');
    const buyItemDiv = document.createElement('div.buy-item');
    const addButton = document.createElement('button.add-to-basket');

    const nameSpan = document.createElement('span.name');
    nameSpan.innerText = product.name;

    const img = document.createElement('img');
    img.src = product.image;

    const descSpan = document.createElement('span.description');
    descSpan.innerText = product.description;

    
    const priceSpan = document.createElement('span.price');
    priceSpan.innerText = product.price;

    buyItemDiv.appendChild(priceSpan);
    buyItemDiv.appendChild(addButton);
    productDiv.appendChild(nameSpan);
    productDiv.appendChild(img);
    productDiv.appendChild(descSpan);
    productDiv.appendChild(buyItemDiv);
    li.appendChild(productDiv);
}
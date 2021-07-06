// herbs and spices data model
// id: a unique string that identifies the product
// name: user friendly name of the product
// image: image file path
// description: a longer discription of the product
// category: the category this product belongs to
// price: the price the user will pay

import { products } from './products.js';

export function renderProduct(product) {
    const li = document.createElement('li');
    const productDiv = document.createElement('div');
    productDiv.classList.add('store-item');
    const buyItemDiv = document.createElement('div');
    buyItemDiv.classList.add('buy-item');
    const addButton = document.createElement('button');
    addButton.classList.add('add-to-basket');


    const nameSpan = document.createElement('span');
    nameSpan.classList.add('name');
    
    nameSpan.innerText = product.name;

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const descSpan = document.createElement('span');
    descSpan.classList.add('description');
    descSpan.innerText = product.description;

    
    const priceSpan = document.createElement('span');
    priceSpan.classList.add('price');
    priceSpan.innerText = product.price;

    buyItemDiv.appendChild(priceSpan);
    buyItemDiv.appendChild(addButton);
    productDiv.appendChild(nameSpan);
    productDiv.appendChild(img);
    productDiv.appendChild(descSpan);
    productDiv.appendChild(buyItemDiv);
    li.appendChild(productDiv);
    console.log(li);
    return li;
}
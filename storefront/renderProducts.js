export function renderProduct(product) {
    const li = document.createElement('li');

    const productDiv = document.createElement('div');
    productDiv.classList.add('store-item');

    const buyItemDiv = document.createElement('div');
    buyItemDiv.classList.add('buy-item');

    const addButton = document.createElement('button');
    addButton.classList.add('add-to-basket');
    addButton.textContent = 'Add';
    addButton.value = product.id;


    const nameSpan = document.createElement('span');
    nameSpan.classList.add('name');
    nameSpan.textContent = product.name;

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const descSpan = document.createElement('span');
    descSpan.classList.add('description');
    descSpan.textContent = product.description;

    
    const priceSpan = document.createElement('span');
    priceSpan.classList.add('price');
    priceSpan.textContent = `$${product.price}`;

    buyItemDiv.appendChild(priceSpan);
    buyItemDiv.appendChild(addButton);
    productDiv.appendChild(nameSpan);
    productDiv.appendChild(img);
    productDiv.appendChild(descSpan);
    productDiv.appendChild(buyItemDiv);
    li.appendChild(productDiv);
    return li;
}
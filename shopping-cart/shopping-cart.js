import { getCart, setCart } from '../cart-api.js';
import { products } from '../data/products.js';
import { renderCart } from './cart-renders.js';

const placeOrderBtn = document.getElementById('place-order');
const clearCartBtn = document.getElementById('clear');

if (!getCart().length) { 
    placeOrderBtn.disabled = 'disabled';
    clearCartBtn.disabled = 'disabled';
}

placeOrderBtn.addEventListener('click', () => {
    if (window.confirm(JSON.stringify(getCart(), true, 2))) {
        setCart([]);
        window.location.replace('../index.html');
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



export const CART = 'CART';

export function addItemToCart(id, cart) {
    for (let item in cart) {
        if (cart[item].id === id) {
            cart[item].quantity += 1;
            return [...cart.slice(0, item), cart[item], ...cart.slice(item + 1, cart.length)];
        }
    }
    return [...cart, { id, quantity: 1 }];
}

export function getCart() {
    let cartString = localStorage.getItem(CART) || '[]';
    return JSON.parse(cartString);
}

export function setCart(cart) {
    localStorage.setItem(CART, JSON.stringify(cart));
}

export function clearCart() {
    localStorage.setItem(CART, '');
}
export const CART = 'CART';

export function addItemToCart(id, qty) {
    const cart = getCart();
    for (let item in cart) {
        if (cart[item].id === id) {
            cart[item].quantity += Number(qty);
            return [...cart.slice(0, item), cart[item], ...cart.slice(item + 1, cart.length)];
        }
    }
    return [...cart, { id, quantity: Number(qty) }];
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
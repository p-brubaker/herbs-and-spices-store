export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
} 

export function findById(products, id) {
    for (let product of products) {
        if (product.id === id) {
            return product;
        }
    }
    return null;
}


export function calcOrderTotal(cart, products) {
    let total = 0;
    
    for (let entry of cart) {
        let currentItem = findById(products, entry.id);
        let subtotal = currentItem.price * entry.quantity;
        total += subtotal;
    }
    return total;
}
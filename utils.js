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

export function calcItemTotal(quantity, price) {
    return quantity * price;
}
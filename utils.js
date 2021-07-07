export function findById(products, id) {
    for (let product of products) {
        console.log(product);
        if (product.id === id) {
            return product;
        }
    }
    return null;
}
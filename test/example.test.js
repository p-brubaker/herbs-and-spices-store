
import { renderProduct } from '../storefront/renderProducts.js';
import { products } from '../data/products.js';
import { findById, calcOrderTotal } from '../utils/utils.js';
import { renderTableRow } from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

test('dom render function matches static html', (expect) => {
    const expected = `<div class="store-item"><span class="name">saffron</span><img src="./assets/saffron.jpeg" alt="saffron"><span class="description">The most expensive spice</span><div class="buy-item"><span class="price">$2336</span><input type="number" min="1" step="1" class="qty-input"><button class="add-to-basket" value="1">Add</button></div></div>`;
    const actual = renderProduct(products[0]);
    expect.equal(actual.innerHTML, expected);
});

test('find by id returns a product from the products array with the given id', (expect) => {
    const expected = {
        name: 'saffron',
        id: '1',
        category: 'spice',
        description: 'The most expensive spice',
        image: './assets/saffron.jpeg',
        price: 2336
    };
    const actual = findById(products, '1');
    expect.deepEqual(actual, expected);
});

test('render table row function matches static html design', (expect) => {
    const expected = `<td>basil</td><td>$5.00</td><td>2</td><td>$10.00</td>`;
    const lineItem = { id: '2', quantity: 2 };
    const product = products[2];
    const actual = renderTableRow(lineItem, product).innerHTML;
    expect.equal(actual, expected);
});

test('calcOrderTotal function returns correct total', (expect) => {
    const fauxCart = [
        { id: '1', quantity: 2 },
        { id: '2', quantity: 10 }
    ];
    const expected = 4682;
    const actual = calcOrderTotal(fauxCart, products);
    expect.equal(actual, expected);
});


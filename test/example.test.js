// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from '../storefront/renderProducts.js';
import { products } from '../data/products.js';
import { cart } from '../data/cart.js';
import { findById, calcOrderTotal } from '../utils/utils.js';
import { renderTableRow } from '../shopping-cart/render-line-items.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('dom render function matches static html', (expect) => {
    const expected = `<li><div class="store-item"><span class="name">saffron</span><img src="./assets/saffron.jpeg" alt="saffron"><span class="description">The most expensive spice</span><div class="buy-item"><span class="price">$2336</span><button class="add-to-basket" value="1">Add</button></div></div></li>`;
    
    const actual = renderProduct(products[0]);

    expect.equal(actual.outerHTML, expected);
});

test('find by id returns a product from the products array with the given id', (expect) => {
    const expected = {
        name: 'saffron',
        id: 1,
        category: 'spice',
        description: 'The most expensive spice',
        image: './assets/saffron.jpeg',
        price: 2336
    };

    const actual = findById(products, 1);

    expect.deepEqual(actual, expected);
});

test('render table row function matches static html design', (expect) => {
    const expected = `<tr><td>basil</td><td>$5.00</td><td>2</td><td>$10.00</td></tr>`;
    
    const lineItem = { id: 2, quantity: 2 };
    const product = products[2];
    const actual = renderTableRow(lineItem, product);

    expect.equal(actual, expected);
});

test('calcOrderTotal function returns correct total', (expect) => {
    const expected = 16;

    const actual = calcOrderTotal(cart, products);

    expect.equal(actual, expected);
});
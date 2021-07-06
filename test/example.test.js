// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from '../app.js';
import { products } from '../products.js';

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
    const expected = `<li>
    <div class="store-item">
        <span class="product-name">Saffron</span>
        <img src="assets/saffron.jpeg" alt="Saffron">
        <span class="description">The most expensive spice</span>
        <div class="buy-item">
            <span class="price">2336.00</span>
            <button class="add-to-basket" value="crocus-sativas">Add</button>
        </div>
    </div>
</li>`;
    
    const actual = renderProduct(products[0]);

    expect.equal(actual.outerHTML, expected);
});
// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProduct } from '../renderProducts.js';
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
    const expected = `<li><div class="store-item"><span class="name"></span><img src="./assets/saffron.jpeg" alt="saffron"><span class="description"></span><div class="buy-item"><span class="price"></span><button class="add-to-basket" value="crocus-sativas"></button></div></div></li>`;
    
    const actual = renderProduct(products[0]);

    expect.equal(actual.outerHTML, expected);
});
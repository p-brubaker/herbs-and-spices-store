import { addItemToCart, getCart, setCart, CART } from '../cart-api.js';


const test = QUnit.test;

test('addItemToCart: item present so adds one to item quantity', (expect) => {
    const fauxCart = [
        { id: 2, quantity: 1 },
        { id: 3, quantity: 3 }
    ];
    const expected = [
        { id: 2, quantity: 2 },
        { id: 3, quantity: 3 }
    ];
    const actual = addItemToCart(2, fauxCart);
    expect.deepEqual(actual, expected);
});

test('addItemToCart: item not present so creates item', (expect) => {
    const fauxCart = [
        { id: 2, quantity: 1 },
        { id: 3, quantity: 3 }
    ];
    const expected = [
        { id: 2, quantity: 1 },
        { id: 3, quantity: 3 },
        { id: 4, quantity: 1 }
    ];
    const actual = addItemToCart(4, fauxCart);
    expect.deepEqual(actual, expected);
});

test('getCart func returns an empty array if no CART present in local storage', (expect) => {
    localStorage.setItem(CART, '');
    const expected = [];
    const actual = getCart();
    expect.deepEqual(actual, expected);
});

test('getCart func returns a well formed cart object when cart is present in local storage', (expect) => {
    localStorage.setItem(CART, 
        `[{"id":2,"quantity":1},{"id":3,"quantity":3},{"id":4,"quantity":1}]`);
    const expected = [
        { id: 2, quantity: 1 },
        { id: 3, quantity: 3 },
        { id: 4, quantity: 1 }
    ];
    const actual = getCart();
    expect.deepEqual(actual, expected);
});

test('setCart func sets CART in local storage to appropriate string', (expect) => {
    const fauxCart = [
        { id: 2, quantity: 1 },
        { id: 3, quantity: 3 },
        { id: 4, quantity: 1 }
    ];
    setCart(fauxCart);
    const expected = `[{"id":2,"quantity":1},{"id":3,"quantity":3},{"id":4,"quantity":1}]`;
    const actual = localStorage.getItem(CART);
    expect.equal(expected, actual);
});


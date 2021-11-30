const describe = require('mocha').describe;
const expect = require('chai').expect;

function multiply(a, b) {
    let resultMultiply = a * b;
    return resultMultiply;
};

function sum(a, b) {
    let resultSum = a + b;
    return resultSum;
};

console.log(multiply(2, 3));
console.log(sum(2, 3));


describe('matematics', () => {
    it('Multiplyes', () => {
        expect(multiply(2, 3)).to.equal(6);
    });

    it('Sums', () => {
        expect(sum(2, 5)).to.equal(7);
    });
});
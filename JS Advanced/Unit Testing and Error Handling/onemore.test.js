const { expect } = require('chai');
const { multiply } = require('./onemore');
const { sum } = require('./onemore');

describe('matematics', () => {
    it('Multiplyes', () => {
        expect(multiply(2, 3)).to.equal(6);
    });

    it('Sums', () => {
        expect(sum(2, 5)).to.equal(7);
    });
});
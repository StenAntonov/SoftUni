const { expect } = require('chai');
const sum = require('./MyModule');

describe('Sum function', () => {
    it('works', () => {
        expect(sum(2, 3)).to.equal(5);
    });
});
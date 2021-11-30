const {describe} = require('mocha');
const {assert} = require('chai');
const isOddOrEven = require('./isOddOrEven');

describe('isOddOrEven', () => {
    it('type is string', () => {
        assert.isUndefined(isOddOrEven(1), 'Message a==a');
    });
    it('is even', () => {
        assert.equal(isOddOrEven('aa'), 'even', 'Message a==a');
    });
    it('is odd', () => {
        assert.equal(isOddOrEven('a'), 'odd', 'Message a==a');
    });
});
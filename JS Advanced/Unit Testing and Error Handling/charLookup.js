const describe = require('mocha').describe;
const assert = require('chai').assert;
const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return 'Incorrect index';
    }
    
    return string.charAt(index);
}

describe('CharLookup', () =>{
    it('isString', () => {
        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar('zahapi', 3.1));
        assert.isUndefined(lookupChar('zahapi', 'a'));
    });

    it('checkIndex', () => {
        assert.equal(lookupChar('zahapi', 6), 'Incorrect index');
        assert.equal(lookupChar('zahapi', 7), 'Incorrect index');
        assert.equal(lookupChar('zahapi', -1), 'Incorrect index');
    });

    it('Index', () => {
        assert.equal(lookupChar('zahapi', 5), 'i');
        assert.equal(lookupChar('zahapi', 2), 'h');
        assert.equal(lookupChar('zahapi', 0), 'z');
    });
});

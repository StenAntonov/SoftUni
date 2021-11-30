const describe = require('mocha').describe;
const assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('', () => {
            assert.isUndefined(mathEnforcer.addFive('a'));
            assert.isUndefined(mathEnforcer.addFive(''));
            assert.isUndefined(mathEnforcer.addFive(false));
            assert.isUndefined(mathEnforcer.addFive(undefined));
            assert.isNaN(mathEnforcer.addFive(NaN));
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(2), 7);
            assert.equal(mathEnforcer.addFive(-2), 3);
            assert.equal(mathEnforcer.addFive(2.5), 7.5);
            assert.closeTo(mathEnforcer.addFive(2.5), 7.5, 0.1);
        });
    });

    describe('subttractten', () => {
        it('', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'));
            assert.isUndefined(mathEnforcer.subtractTen(''));
            assert.isUndefined(mathEnforcer.subtractTen(false));
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.closeTo(mathEnforcer.subtractTen(10.2), 0.2, 0.1);
            assert.equal(mathEnforcer.subtractTen(25), 15);
            assert.equal(mathEnforcer.subtractTen(+25), 15);
            assert.equal(mathEnforcer.subtractTen(-25), -35);
            assert.equal(mathEnforcer.subtractTen(-2.5), -12.5);
            assert.closeTo(mathEnforcer.subtractTen(-2.5), -12.5 , 0.1);
        });
    });

    describe('Sum', () => {
        it('', () => {
            assert.isUndefined(mathEnforcer.sum('a' , 'b'));
            assert.isUndefined(mathEnforcer.sum(1 , 'b'));
            assert.isUndefined(mathEnforcer.sum('a' , 2));
            assert.isUndefined(mathEnforcer.sum('a'));
            assert.equal(mathEnforcer.sum(1 , 2), 3);
            assert.equal(mathEnforcer.sum(12 , 25), 37);
            assert.equal(mathEnforcer.sum(-12 , -25), -37);
            assert.equal(mathEnforcer.sum(-12 , +25), +13);
            assert.closeTo(mathEnforcer.sum(-12 , +2.5), -9.4, 0.1);
            assert.equal(mathEnforcer.sum(-12.5 , +2.5), -10);
            assert.equal(mathEnforcer.sum(-1.5 , +2.5), 1);
        });
    });
});

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

module.exports = {
    multiply,
    sum
};

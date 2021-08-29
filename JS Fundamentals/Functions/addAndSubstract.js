function addAndSubstract(a, b, c) {
    let sum = (x, y, k) => x + y - k;
    let result = sum(a, b, c);
    return result;
}

console.log(addAndSubstract(5, 3, 2));

function solve(input) {
    let result = input.filter( (x, i) => i % 2 == 1).map( x => x * 2).reverse().join(' ');
    return result;
}
console.log(solve([3, 0, 10, 4, 7, 3]));
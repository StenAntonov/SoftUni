function solve(input) {
    let arr = input.slice();
    let result = [];
    let sorted = arr.sort((a, b) => a - b);
    let present = 0;
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            present = sorted.shift();
            result.push(present);
        } else if (i % 2 == 1) {
            present = sorted.pop();
            result.push(present);
        }
    }
    return result;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
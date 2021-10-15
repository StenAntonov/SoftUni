function solve(input){
    let sorted = input.sort( (a, b) => a - b);
    let half = input.length / 2;
    let sliced = input.slice(half);
    return sliced;
}
console.log(solve([4, 7, 2, 5, 1]));
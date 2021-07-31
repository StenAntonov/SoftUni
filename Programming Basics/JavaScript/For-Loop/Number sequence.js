function solve(input) {
    let n = Number(input.shift());
    let maxNum = Number.MIN_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < n; i++) {
        let currentNum = Number(input.shift());
        if(currentNum > maxNum) {
            maxNum = currentNum;
        }
        if(currentNum < minNum) {
            minNum = currentNum;
        }
    }
    console.log(`Max number: ${maxNum}`);
    console.log(`Min number: ${minNum}`);
}
solve([5,
    10,
    20,
    304,
    0,
    50
    ])
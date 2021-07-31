function solve(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < 2 * n; i++) {
        let num1 = Number(input.shift());
        if (i < n) {
            leftSum += num1;
        } else {
            rightSum += num1;
        }
    }
    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`)
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`)
    }
}
solve([2,
    10,
    90,
    60,
    40

])
function solve(input) {
    let n = Number(input.shift());
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input.shift());
        if (i % 2 !== 0) {
            oddSum += currentNum;
        }else {
            evenSum += currentNum;
        }
    }
    if(oddSum === evenSum) {
        console.log("Yes");
        console.log(`Sum = ${oddSum}`)
    }else {
        console.log("No");
        console.log(`Diff = ${Math.abs(oddSum - evenSum)}`);
    }
}
solve([3,
    5,
    8,
    1
    
    
    ])
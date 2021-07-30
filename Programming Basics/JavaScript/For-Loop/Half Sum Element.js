function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    let biggestNum = 0;
    for (i = 0; i < n; i++) {
        let currentNum = Number(input.shift());
        sum += currentNum
        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }
    }
    sum -= biggestNum;
    if (sum === biggestNum) {
        console.log(`Yes`);
        console.log(`Sum = ${sum}`);
    } else {
            console.log("No");
            console.log(`Diff = ${Math.abs(biggestNum - sum)}`);
        }
    }
    solve([7,
        3,
        4,
        1,
        1,
        2,
        12,
        1
    ])
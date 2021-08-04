function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let result = '';

    for (let number = num1; number <= num2; number++) {
        let oddNumsSum = 0;
        let evenNumsSum = 0;

        let current = number.toString();
        for (let i = 0; i <= current.length - 1; i++) {
            let num = Number(current[i]);

            if (i % 2 == 0) {
                oddNumsSum += num;
            } else {
                evenNumsSum += num;
            }
        }
        if (oddNumsSum === evenNumsSum) {
            result += `${number} `;
        }
    }
    console.log(result);
}
solve([100000, 100050])
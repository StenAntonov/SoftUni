function solve(n, b) {
    let originalNum = n;
    let binaryExpression = "";
    while (n > 0) {
        let binaryCalc = n % 2;
        if (binaryCalc == 0) {
            b++;
        }
        binaryExpression += binaryCalc;
        n = Math.trunc(n / 2);

    }
    let result = binaryExpression.split('').reverse().join('');
    console.log(`${originalNum} -> ${result}`);
    console.log(`We have ${b} zeroes.`);
    
    
}
solve(20, 0);
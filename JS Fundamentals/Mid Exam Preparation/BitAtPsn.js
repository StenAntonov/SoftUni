function solve(n){
let b = 0;
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
let p = 5;
let bit = (result >> 5) & 1;
console.log(bit);
}
solve(125)

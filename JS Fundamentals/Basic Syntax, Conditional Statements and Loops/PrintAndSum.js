function solve(num1, num2) {
    let total = 0;
    let space = ''
    while ( num1 <= num2 ) {
        total += num1;
        if (num1 == num2) {
            space += num1;
        }else {
            space += num1 + ' ';
        }
        num1++
    }
    console.log(space);
    console.log(`Sum: ${total}`) ;
}
solve(5, 10)
function solve(n) {
    let currentNum = 0;
    let currentOddNum = 0;
    let counter = 0;
    let sum = 0;
    for ( i=1 ; i <= 100 ; i++) {
        currentNum = i;
        if (counter == n) {
            break;
        }else if ( i % 2 == 1) {
            currentOddNum = i;
            sum += i;
            counter += 1;
            console.log(i);
        }
    }
    console.log(`Sum: ${sum}`);
}
solve(5)
function oddEven (n) {
    let num = n.toString().split('');
    let current = 0;
    let sumOdd = 0;
    let sumEven = 0;

    for ( let i = 0 ; i < num.length ; i++ ){
        current = num[i];
        if( current % 2 == 0 ) {
            sumEven+= Number(current);
        }else{
            sumOdd += Number(current);
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`
    
}
console.log(oddEven(1000435));
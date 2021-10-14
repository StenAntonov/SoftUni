function solve(arr, rounds) {
    for ( let i = 0 ; i < rounds ; i++ ) {
        let present = arr.pop();
        arr.unshift(present);
    }
    return arr.join(' ');
}
console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));
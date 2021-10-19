function solve(n, k) {
    let result = [1];
    let i = 0;
    while(result.length != n){
        let next = 0;
        let present = result[i];
        
        for ( let j = 1 ; j < k ; j++ ) {
            let previous = 0; 
            if(result[i - j] != undefined){
                previous = result[i - j];
            }
           next += previous;
        }
        next += present;
        result.push(next);
        i++
    }
    return result;
}
console.log(solve(8, 2));

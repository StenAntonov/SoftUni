function solve(arr) {
    let result = 0;
    for ( let num of arr) {
        if (num % 2 == 0) {
            result += Number(num);
        }
    }
    console.log(result);
        
}
solve(['1','2','3','4','5','6'])
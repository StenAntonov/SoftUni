function solve(input) {
    let n = Number(input.shift());
    for(i = 0; i <= n; i += 2){
        console.log(Math.pow(2,i));
    }
}
solve([10])
function solve(input){
    input = [].concat(...input);
    let biggest = Math.max(...input);
    return biggest;
}
console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   
   ));
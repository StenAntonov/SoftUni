function solve(input){
    let matches = 0;
   
    for ( let i = 0 ; i < input.length - 1 ; i++ ) {
        for ( let j = 0 ; j < input[0].length ; j++ ) {
            if(input[i][j] == input[i+1][j]){
             matches++;
            }
        }
    }

    for ( let k = 0 ; k < input.length ; k++ ) {
        for ( let y = 0 ; y < input[0].length - 1 ; y++ ) {
            if(input[k][y] == input[k][y + 1]){
             matches++;
            }
        }
    }
    return matches;
}
console.log(solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]

));
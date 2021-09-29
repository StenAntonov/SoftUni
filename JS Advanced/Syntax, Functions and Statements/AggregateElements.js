function solve(input){
    let count = input.length;
    let sum = 0;
    let sumHalf = 0;
    let concat = "";

    for ( let i = 0 ; i < count ; i++ ) {
        sum += input[i];
        sumHalf += 1 / input[i];
        concat += input[i];
        
    }

    console.log(sum);
    console.log(sumHalf);
    console.log(concat);
}
solve([1, 2, 3]);
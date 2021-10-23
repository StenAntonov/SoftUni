function solve(input){
    let result = [];

    for(let i = 0 ; i < 2 ; i++){
        let present = Math.min(...input);
        result.push(present);
        let index = input.indexOf(present);
        input.splice(index, 1);
    }

    return result.join(' ');
}
console.log(solve([30, 15, 50, 5]));
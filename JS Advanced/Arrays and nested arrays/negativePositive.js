function solve(input){
    let result = [];
    let temp = false;
    while(input.length != 0){
        let present = input.shift();
        if(present >= 0){
            result.push(present);
        
        }else{
            result.unshift(present);
        }
    }

    return result.join('\n');
}
console.log(solve([3, -2, 0, -1]));
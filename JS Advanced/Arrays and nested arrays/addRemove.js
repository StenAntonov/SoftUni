function solve(input) {
    let counter = 0;
    let result = [];
    let arr = input.slice();

    for ( let i = 0 ; i < input.length ; i++ ) {
        let command = arr[i];
        counter++
        if(command == 'add'){
            result.push(counter);
        }else{
            result.pop();
        }
    }

    if(result.length == 0){
       return `Empty`;
    }else{
        return result.join('\n');
    }
}
console.log(solve(['remove', 
'remove', 
'remove']


));
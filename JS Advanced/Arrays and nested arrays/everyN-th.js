function solve(arr, step){
    let result = [];

    for (let index = 0; index < arr.length; index += step) {
        const element = arr[index];
        result.push(element);
    }
    return result;
}
console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6

));
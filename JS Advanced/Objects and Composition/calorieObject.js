function solve(input) {
    let myObj = {};
    let arr 
    = input.slice();
    for (let i = 0 ; i < input.length ; i += 2) {
        let key = arr[i];
        let value = Number(arr[i + 1]);
        myObj[key] = value;
    }
    return myObj;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
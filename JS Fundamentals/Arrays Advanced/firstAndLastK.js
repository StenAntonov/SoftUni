function firstAndLastK(arr) {
    let num = arr.shift();
    let result = arr.slice(0,num);
    let result2 = arr.slice(-num);
    console.log(result.join(' '));
    console.log(result2.join(' '));
    
    
}
firstAndLastK([2, 7, 8, 9])
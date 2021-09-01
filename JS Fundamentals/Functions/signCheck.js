function signCheck(a, b, c) {
    let result = '';
    if (a >= 0 && b >= 0 && c >= 0) {
        result = 'Positive';   
        console.log(result);
        
    } else if (a >= 0 && b <= 0 && c <= 0) {
        result = 'Positive';
        console.log(result);
    } else if (a <= 0 && b <= 0 && c >= 0) {
        result = 'Positive';
        console.log(result);
    } else if (a <= 0 && b >= 0 && c <= 0) {
        result = 'Positive';
        console.log(result);
    } else {
        result = 'Negative';
        console.log(result);
    }
}
signCheck(5, -5, -25)
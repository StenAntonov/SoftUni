function sum(a){
    let sum = 0;
    sum += a;

    function calc(b){
        sum += b;
        return calc;
    }
    
    calc.toString = () => sum;
    return calc;
}

console.log(sum(5)(3)(5)(4) + '');
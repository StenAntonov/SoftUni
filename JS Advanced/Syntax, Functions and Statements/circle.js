function solve(input){
    let result;
    let typeOf = typeof input;
    
    if(typeOf == "number"){
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeOf}.`);
    }
}
solve(5);
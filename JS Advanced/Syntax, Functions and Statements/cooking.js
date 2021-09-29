function solve(number, ...params){
    for ( let i = 0 ; i < params.length ; i++ ) {
        let order = params[i];
        if(order.includes("chop")){
            number /= 2;
        }
        if(order.includes("dice")){
            number = Math.sqrt(number);
        }
        if(order.includes("spice")){
            number += 1;
        }
        if(order.includes("bake")){
            number *= 3;
        }
        if(order.includes("fillet")){
            number -= number * 0.2;
        }
        console.log(number);
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
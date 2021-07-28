function solve(input) {
    let widht = Number(input.shift());
    let lenght = Number(input.shift());
    let cakeSize = widht * lenght;
    let counter = 0;
    let command = input.shift();
    while(command !== "STOP") {
        let cakesCount = Number(command);
        counter += cakesCount;
        if (cakeSize < counter) {
            break;
        }
        command = input.shift();
    }
    if(command === "STOP"){
        console.log(`${cakeSize - counter} pieces are left.`);
    }else {
        console.log(`No more cake left! You need ${Math.abs(cakeSize - counter)} pieces more.`);
    }
}
solve([10,
    2,
    2,
    4,
    6,
    "STOP"
    
    ])
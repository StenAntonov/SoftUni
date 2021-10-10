function solve(input){
    let numAsString = input.toString();
    let length = numAsString.length;
    let present;
    let previous;
    let same = true;
    let sum = 0;

    for ( let i = 0 ; i < length ; i++ ) {
        present  = numAsString[i];
        sum += Number(present);
        if(present == previous && present != undefined || previous == undefined){
            previous = present;
        }else{
            same = false;
            
        }
    }
    return `${same}\n${sum}`;
}
console.log(solve(1234));
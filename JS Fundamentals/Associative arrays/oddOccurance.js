function solve(input){
    let inputArray = input.toLowerCase().split(' ');
    let myObj = {};

    for ( let token of inputArray) {
        if(myObj.hasOwnProperty(token)){
            myObj[token]++
        }else{
            myObj[token] = 1;
        }
    }
    let filtered = Object.keys(myObj).filter( x => myObj[x] % 2 == 1).sort( (a, b) => myObj[b] - myObj[a]);
    console.log(filtered.join(' '));
    
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
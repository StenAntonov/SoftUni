function solve(input){
    let count = input;
    if(count == undefined){
        count = 5;
    }
    for( let i = 0; i < count ; i++ ) {
        console.log("* ".repeat(count).trim());
    }
}
solve();
function solve(input){
    let result = [];
    let cap = 0;
    for ( let i = 1 ; i < input.length ; i++ ){
        if(input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
            let word = input.substring(cap, i);
            result.push(word);
            cap = i;
        }
    }
    result.push(input.slice(cap));
    console.log(result.join(', '))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
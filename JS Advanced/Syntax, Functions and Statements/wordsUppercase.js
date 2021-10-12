function solve(input){
    let pattern = /\w+/g;
    let matches = '';

    if(pattern.test(input)){
        matches = input.match(pattern);
    }
    matches = matches.join(', ').toLocaleUpperCase();
    console.log(matches);
}
solve('hello');
function solve(input){
    input = [].concat(...input);
    let main = input.filter( (x, i) => i % 2 === 0);
    let secondary = input.filter( (x, i) => i % 2 === 1).reverse();
    let result = main.concat(secondary);
    main = result.filter( (x, i) => i % 2 === 0).reduce( (a, b) => a + b);
    secondary = result.filter( (x, i) => i % 2 === 1).reduce( (a, b) => a+ b);
    return `${main} ${secondary}`;
   
}
console.log(solve([[20, 40],
    [10, 60]]
   ));
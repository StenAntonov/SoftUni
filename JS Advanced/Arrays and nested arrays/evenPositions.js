function solve(input){
    let even = input.filter( (x, i) => i % 2 == 0);
    return even.join(' ');
}
console.log(solve(['20', '30', '40', '50', '60']));
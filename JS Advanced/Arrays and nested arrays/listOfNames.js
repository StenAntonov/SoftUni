function solve(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    let counter = 0;
    let result = [];
    let present = '';
    for ( let i = 0 ; i < sorted.length ; i++ ) {
        counter++;
        present = `${counter}.${input[i]}`;
        result.push(present);
    }
    
    return result.join('\n');
}
console.log(solve(['John', 'Bob', 'Christina', 'Ema']));    
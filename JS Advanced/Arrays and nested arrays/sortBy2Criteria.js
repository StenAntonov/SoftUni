function solve(input) {
    let sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    return sorted.join('\n');
}
console.log(solve(['alpha', 
'beta', 
'gamma']
));
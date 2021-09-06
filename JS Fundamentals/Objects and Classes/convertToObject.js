function solve(input) {
    let person = JSON.parse(input);
    for (const key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
        
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');
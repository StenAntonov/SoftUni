function sugarCubes(input) {
    let sequence = input.shift();
    let command = input.shift().split(' ');

    while (command[0] !== "Mort") {
        let value = Number(command[1]);
        let replacement = Number(command[2]);
        if (command[0] == "Add") {
            sequence.push(value);
        } else if (command[0] == "Remove") {
            let index = sequence.indexOf(value);
            sequence.splice(index, 1);
        } else if (command[0] == "Replace") {
            let index = sequence.indexOf(value);
            sequence.splice(index, 1, replacement);
        } else if (command[0] == "Collapse") {
            let filtered = sequence.filter(x => x >= value);
            sequence = filtered;
        }
        command = input.shift().split(' ');
    }
    console.log(sequence.join(' '));
}
sugarCubes([[2, -1, 0, -3, 9, 8, 7, 2],
    "Collapse 8",
    "Mort"])    
    ;    
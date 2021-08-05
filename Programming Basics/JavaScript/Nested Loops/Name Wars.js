function solve(input) {
    let command = input.shift();
    let nameSum = Number.MIN_SAFE_INTEGER;
    let currentnameSum = 0;
    let commandName = 0;
    while(command != "STOP") {
        let name = command.length;
        for (let i = 0 ; i < name; i++) {
            let currentLetter = command[i];
            currentnameSum += currentLetter.charCodeAt(0);
            if(nameSum <= currentnameSum) {
                nameSum = currentnameSum;
                commandName = command;
            }
        }
        command = input.shift();
        currentnameSum = 0;
    }
    if(command === "STOP") {
    console.log(`Winner is ${commandName} - ${nameSum}!`)
    }
}
solve(["Petar",
"Georgi",
"Stanimir",
"STOP"
])
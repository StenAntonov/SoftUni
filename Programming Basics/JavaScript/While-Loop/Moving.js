function solve(input) {
    let lenght = Number(input.shift());
    let widht = Number(input.shift());
    let hight = Number(input.shift());
    let volume = lenght * widht * hight;
    let command = input.shift();
    let boxesVolume = 0;
    while (command !== "Done") {
        box = Number(command);
        boxesVolume += box;
        if (volume <= boxesVolume) {
            console.log(`No more free space! You need ${boxesVolume - volume} Cubic meters more.`);
            break;
        }
        command = input.shift();
    }
    if (command == "Done") {
        console.log(`${volume - boxesVolume} Cubic meters left.`);
    }
}
solve([10,
    1,
    2,
    4,
    6,
    "Done"    
])
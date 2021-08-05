function solve(input) {
    let command = input.shift();
    let nameLength = command.length;
    let mostpowerfull = 0;
    let NamePoints = 0;
    let name = "";
    while (command !== "Stop") {
        let currName = command;
        let nameLength = currName.length;
        for (let i = 0; i < nameLength; i++) {
            let currLetNum = Number(input.shift());
            if (currLetNum == currName.charCodeAt(i)) {
                NamePoints += 10;
            } else {
                NamePoints += 2;
            }

        }
        if (NamePoints > mostpowerfull) {
            mostpowerfull = NamePoints;
            name = currName;
        } else if(NamePoints == mostpowerfull) {
            mostpowerfull = NamePoints;
            name = currName
        }
        NamePoints = 0;
        command = input.shift();
    }
    console.log(`The winner is ${name} with ${mostpowerfull} points!`)
}
solve(["Pesho" ,124, 34, 111 ,97, 99 ,"Gosho", 98, 124, 88, 76, 18 ,"Stop" ]) 
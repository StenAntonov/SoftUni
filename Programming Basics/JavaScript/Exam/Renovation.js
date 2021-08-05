function solve(input){
    let wallHeight = Number(input.shift());
    let wallWidht = Number(input.shift());
    let percentNotToBePainted = Number(input.shift());
    let command = input.shift();
    let area = 4 *((wallHeight * wallWidht));
    let areaForPainting = Math.ceil(area - (area / 100 * percentNotToBePainted));
    let paintLitters = 0;

    while (command !== "Tired!") {
        paintLitters = Number(command);
        command = input.shift();
        areaForPainting -= paintLitters;
        paintLitters -= paintLitters;
        
        if(areaForPainting == 0 && paintLitters == 0 ) {
            console.log(`All walls are painted! Great job, Pesho!`);
            break;
        }else if (areaForPainting < 0) {
            console.log(`All walls are painted and you have ${Math.abs(areaForPainting)} l paint left!`);
            break;
        }
    }
    if(command == "Tired!") {
        console.log(`${areaForPainting} quadratic m left.`);
    }
}
solve([2,
    3,
    25,
    6,
    7,
    "Tired!"])
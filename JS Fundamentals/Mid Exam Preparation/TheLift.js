function lift(input) {
    let people = Number(input.shift());
    let wagons = input[0].split(' ').map(Number);
    let wagonsFull = false;
    let emptyPlaces = 0;
    let wagonCounter = 0;

    for (let i = 0; i < wagons.length; i++) {
        let wagon = wagons[i];
        if(wagon[i] == 4){
            wagonCounter++
            continue;
        }else if (wagon < 4) {
            emptyPlaces = 4 - wagon;
            if (emptyPlaces <= people) {
                people -= emptyPlaces;
                wagons[i] = 4;
                wagonCounter++
            } else {
                emptyPlaces -= people;
                wagons[i] = people;
                people = 0;
            }
        } 
        if (wagonCounter == wagons.length) {
            wagonsFull = true;
            break;
        }

    }

    if (wagonsFull == true && people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    } else if (people == 0 && wagonsFull == false) {
        console.log(`The lift has empty spots!`);
    }
    console.log(wagons.join(' '));
}
lift([
    "20",
    "0 2 0"
   ]
   
);
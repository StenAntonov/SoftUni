function lift(input) {
    let people = Number(input.shift());
    let wagons = input[0].split(' ').map(Number);
    let emptySeats = 0;

    while (people != 0 && isFree(wagons)) {
        let wagonIndex = 0;
        for (let wagon of wagons) {

            emptySeats = 4 - wagon;
            if (emptySeats > people) {
                emptySeats = people;
            }
            people -= emptySeats;
            wagons[wagonIndex] += emptySeats;
            wagonIndex++
        }

    }
    if (isFree(wagons) == false && people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    if (people == 0 && isFree(wagons) == true) {
        console.log(`The lift has empty spots!`);
    }
    console.log(wagons.join(' '));
    function isFree(array) {
        let filtered = wagons.filter(x => x < 4)
        return filtered.length > 0;
    }
}
lift([
    "20",
    "0 2 0"
]


)
function warShips(input) {
    let pirateShipStatus = input.shift().split('>').map(Number);
    let warShipStatus = input.shift().split('>').map(Number);
    let shipSectionMaxHealth = Number(input.shift());
    let command = input.shift().split(' ');
    let pirateShipSum = 0;
    let warshipSum = 0;
    let pirateShipToRepair = shipSectionMaxHealth * 0.20;
    let stalement = false;

    while (command[0] !== "Retire") {
        let startIndex = Number(command[1]);
        let dmgOrEndIndex = Number(command[2]);
        let damage = Number(command[3]);
        if (command[0] == "Fire") {
            if (startIndex >= 0 && startIndex <= 1000 && startIndex >= -200 && startIndex <= 200) {
                if (warShipStatus.length > startIndex) {
                    if ((warShipStatus[startIndex] - dmgOrEndIndex) > 0) {
                        warShipStatus[startIndex] -= dmgOrEndIndex;
                    } else {
                        console.log(`You won! The enemy ship has sunken.`);
                        break;
                    }

                } else {
                    command = input.shift().split(' ');
                    continue;
                }
            } else {
                command = input.shift().split(' ');
                continue;
            }
        } else if (command[0] == "Defend") {
            if (startIndex >= 0 && startIndex <= 1000 && dmgOrEndIndex >= 0 && dmgOrEndIndex <= 1000 && startIndex >= -200 && startIndex <= 200) {

                if (pirateShipStatus.length > startIndex && pirateShipStatus.length > dmgOrEndIndex) {
                    let striked = pirateShipStatus.slice(startIndex, dmgOrEndIndex).map(x => x - damage);
                    let ifSunk = striked.filter(x => x <= 0);
                    if (ifSunk.length == 0) {
                        let spliced = pirateShipStatus.splice(startIndex, striked.length);

                        for (let i = striked.length - 1; i >= 0; i--) {
                            pirateShipStatus.unshift(striked[i]);
                        }
                    } else {
                        console.log(`You lost! The pirate ship has sunken.`);
                        break;
                    }
                } else {
                    command = input.shift().split(' ');
                    continue;
                }
            } else {
                command = input.shift().split(' ');
                continue;
            }
        } else if (command[0] == "Status") {
            let filtetered = pirateShipStatus.filter(x => x < pirateShipToRepair);
            let count = filtetered.length;
            console.log(`${count} sections need repair.`);
        } else if (command[0] == "Repair") {
            if (startIndex >= 0 && startIndex <= 1000 && startIndex >= -200 && startIndex <= 200) {
                if (pirateShipStatus.length > startIndex) {
                    pirateShipStatus[startIndex] += dmgOrEndIndex;
                    if (pirateShipStatus[startIndex] > shipSectionMaxHealth) {
                        pirateShipStatus[startIndex] = shipSectionMaxHealth;
                    }
                }
            }
        }
        command = input.shift().split(' ');
    }
    if (command[0] == "Retire") {
        stalement = true;
    }
    if (stalement == true) {
        pirateShipSum = pirateShipStatus.reduce((x, y) => x + y);
        warshipSum = warShipStatus.reduce((x, y) => x + y);
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
}
warShips((["2>3>4>5>6",
    "2>3>4>5>6>10>11",
    "15",
    "Fire -1 22",
    "Fire 22 44",
    "Fire 1 1",
    "Retire"]))
    ;
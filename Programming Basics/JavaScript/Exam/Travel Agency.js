function solve(input) {
    let town = input.shift();
    let packetType = input.shift();
    let vipDiscount = input.shift();
    let days = Number(input.shift());
    let price = 0;
    let invalidInput = false;
    if (days < 1) {
        invalidInput = true;
        console.log("Days must be positive number!")
    } else {
        switch (town) {
            case "Bansko":
            case "Borovets":
                if (days > 7) {
                    days--
                }
                switch (packetType) {
                    case "noEquipment":
                        if (vipDiscount == "yes") {
                            price = 0.95 * (80 * days);
                        } else {
                            price = 80 * days;
                        }
                        ; break;
                    case "withEquipment":
                        if (vipDiscount == "yes") {
                            price = 0.90 * (100 * days);
                        } else {
                            price = 100 * days;
                        }
                        ; break;
                }; break;
            case "Varna":
            case "Burgas":
                if (days > 7) {
                    days--
                }
                switch (packetType) {
                    case "noBreakfast":
                        if (vipDiscount == "yes") {
                            price = 0.83 * (100 * days);
                        } else {
                            price = 100 * days;
                        }
                        ; break;
                    case "withBreakfast":
                        if (vipDiscount == "yes") {
                            price = 0.88 * (130 * days);
                        } else {
                            price = 130 * days;
                        }
                        ; break;
                    default:
                        invalidInput = true;
                        console.log("Invalid input!")
                }break;
            default:
                invalidInput = true;
                console.log("Invalid input!")
        }
    }
    if (invalidInput != true) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}
solve(["Gabrovo",
    "noBreakfast",
    "no",
    3])

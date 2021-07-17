function footballSouveniers(input) {
    country = input.shift();
    souveniers = input.shift();
    number = Number(input.shift());
    switch (country) {
        case "Argentina": switch (souveniers) {
            case "flags": suma = 3.25 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "caps": suma = 7.20 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "posters": suma = 5.10 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "stickers": suma = 1.25 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            default: console.log("Invalid stock!");
        };break;
        case "Brazil": switch (souveniers) {
            case "flags": suma = 4.20 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "caps": suma = 8.50 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "posters": suma = 5.35 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "stickers": suma = 1.20 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            default: console.log("Invalid stock!");
        };break;
        case "Croatia": switch (souveniers) {
            case "flags": suma = 2.75 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "caps": suma = 6.90 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "posters": suma = 4.95 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "stickers": suma = 1.10 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            default: console.log("Invalid stock!");
        }break;
        case "Denmark": switch (souveniers) {
            case "flags": suma = 3.10 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "caps": suma = 6.50 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "posters": suma = 4.80 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            case "stickers": suma = 0.90 * number;
            console.log(`Pepi bought ${number} ${souveniers} of ${country} for ${suma.toFixed(2)} lv.`); break;
            default: console.log("Invalid stock!");
        }break;
        default: console.log("Invalid country!");
    }

}
footballSouveniers(["Croatia",
    "flags",
    13    
    ])
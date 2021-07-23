function fishingBoat(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let count = Number(input.shift());
    let price = 0;
    switch (season) {
        case "Spring":
            if (count <= 6) {
                price = 3000 * 0.9;
            } else if (count > 6 && count <= 11) {
                price = 3000 * 0.85;
            } else if (count >= 12) {
                price = 3000 * 0.75;
            }
            if (count % 2 == 0 && season != "Autumn") {
                price = price * 0.95;
            }; break;
        case "Summer":
            if (count <= 6) {
                price = 4200 * 0.9;
            } else if (count > 6 && count <= 11) {
                price = 4200 * 0.85;
            } else if (count >= 12) {
                price = 4200 * 0.75;
            }
            if (count % 2 == 0 && season != "Autumn") {
                price = price * 0.95;
            }; break;
        case "Autumn":
            if (count <= 6) {
                price = 4200 * 0.9;
            } else if (count > 6 && count <= 11) {
                price = 4200 * 0.85;
            } else if (count >= 12) {
                price = 4200 * 0.75;
            }; break;
        case "Winter":
            if (count <= 6) {
                price = 2600 * 0.9;
            } else if (count > 6 && count <= 11) {
                price = 2600 * 0.85;
            } else if (count >= 12) {
                price = 2600 * 0.75;
            }
            if (count % 2 == 0 && season != "Autumn") {
                price = price * 0.95;
            }; break;
    }
    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
    }
} 
fishingBoat([2000,
    "Winter",
    13
    
    
    ])
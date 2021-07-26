function newHouse(input) {
    let flowers = input.shift();
    let count = Number(input.shift());
    let budget = Number(input.shift());
    let price = 0;
    switch (flowers) {
        case "Roses":
            if (count > 80) {
                price = (count * 5) * 0.9;
            } else {
                price = count * 5;
            }; break;
        case "Dahlias":
            if (count > 90) {
                price = (count * 3.80) * 0.85;
            } else {
                price = count * 3.8;
            }; break;
        case "Tulips":
            if (count > 80) {
                price = (count * 2.80) * 0.85;
            } else {
                price = count * 2.8;
            }; break;
        case "Narcissus":
            if (count < 120) {
                price = (count * 3) * 1.15;
            } else {
                price = count * 3;
            }; break;
        case "Gladiolus":
            if (count < 80) {
                price = (count * 2.5) * 1.20;
            } else {
                price = count * 2.5;
            }; break;
    }
    if(budget >= price) {
        console.log(`Hey, you have a great garden with ${count} ${flowers} and ${(budget - price).toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }
}
newHouse(["Narcissus",
119,
360


    ])
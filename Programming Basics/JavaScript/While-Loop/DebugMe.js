function debugMe(input) {
    let moneyForToys = 0;
    let kidsCount = 0;
    let moneyForSweaters = 0;
    let adultsCount = 0;
    let command = input.shift();

    while ("Christmas" !== command) {
        let years = Number(command);
        if (years <= 16) {
            moneyForToys += 5;
            kidsCount++;
        } else {
            moneyForSweaters += 15;
            adultsCount++;
        }
        command = input.shift();
    }
    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}
debugMe([18,
    20,
    48,
    45,
    56,
    37,
    12,
    14,
    
    "Christmas"
    
    ])
function ToyShop(input) {
    let excMoney = Number(input.shift());
    let quantityPuzzles = Number(input.shift());
    let quantityTalkingDolls = Number(input.shift());
    let quantityTeddyBears = Number(input.shift());
    let quantityMinions = Number(input.shift());
    let quantityTrucks = Number(input.shift());
    let PuzzlePrice = 2.60;
    let TalkingDollPrice = 3.00;
    let TeddyBearPrice = 4.10;
    let MinionPrice = 8.20;
    let TruckPrice = 2.00;
    let totalOrders = quantityMinions + quantityPuzzles + quantityTalkingDolls + quantityTeddyBears + quantityTrucks;
    let totalIncome = (quantityPuzzles * PuzzlePrice) + (quantityTalkingDolls * TalkingDollPrice) +
        (quantityTeddyBears * TeddyBearPrice) + (quantityMinions * MinionPrice) + (quantityTrucks * TruckPrice);
    if (totalOrders >= 50) {
        let totMin25 = totalIncome - (totalIncome * 0.25);
        let totMinMinRent = totMin25 - (totMin25 * 0.10);
        if (totMinMinRent >= excMoney) {
            console.log("Yes! " + (totMinMinRent - excMoney).toFixed(2) + " lv left.");
        }else {
            console.log("Not enough money! " + (excMoney - totMinMinRent).toFixed(2) + " lv needed.");
        }
    }else {
        let totMin25 = totalIncome
        let totMinMinRent = totMin25 - (totMin25 * 0.10);
        if (totMinMinRent >= excMoney) {
            console.log("Yes! " + (totMinMinRent - excMoney).toFixed(2) + " lv left.");
        }else {
            console.log("Not enough money! " + (excMoney - totMinMinRent).toFixed(2) + " lv needed.");
        }
    }

}
ToyShop([320,
    8,
    2,
    5,
    5,
    1    
    ])
function fuelMoney(dist, passengers, fuelPricePerLiter ) {
    let fulNeeded = (dist / 100 * 7) + (passengers * 0.1);
    let moneyCost = fulNeeded * fuelPricePerLiter;
    console.log(`Needed money for that trip is ${moneyCost}lv.`);
    
 }
fuelMoney(260, 9, 2.49)
fuelMoney(90, 14, 2.88)
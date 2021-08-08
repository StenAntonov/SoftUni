function mining(input) {
    let totalGrams = 0;
    let bitcoinPrice = 11949.16;
    let gramGoldPrice = 67.51;
    let totalMoney = 0;
    let moneyCollected = 0;
    let moneyLeft = 0;
    let BitcoinOwned = 0;
    let dayFirstBitcoinBought = 0;

    for (let day = 0; day <= input.length - 1; day++) {
        let dayGrams = input[day];
        if (++day != 0 && day % 3 === 0) {
            dayGrams -= dayGrams * 0.3;
        }
        day--
        let dayMoney = dayGrams * gramGoldPrice;
        moneyCollected = moneyLeft + dayMoney;
        moneyLeft = moneyCollected;
        while (moneyCollected >= bitcoinPrice) {
            moneyLeft = moneyCollected - bitcoinPrice;
            moneyCollected -= bitcoinPrice;
            BitcoinOwned += 1;
            if (BitcoinOwned > 0 && dayFirstBitcoinBought === 0) {
                dayFirstBitcoinBought = day + 1;
            }
        }
        while (moneyLeft >= bitcoinPrice) {
            BitcoinOwned += 1;
            moneyLeft -= bitcoinPrice;
        }
        moneyCollected = 0;
        totalMoney += dayMoney;
        totalGrams += dayGrams;
        dayGrams = 0;
    }
    console.log(`Bought bitcoins: ${BitcoinOwned}`);
    if(BitcoinOwned !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoinBought}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}
mining([100, 200, 300])
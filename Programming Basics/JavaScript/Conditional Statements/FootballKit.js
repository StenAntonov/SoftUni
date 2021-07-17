function footballKit(input) {
    let tShirtPrice = Number(input.shift());
    let bonusPrice = Number(input.shift());
    let shortsPrice = tShirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let buttonsPrice = 2 * (tShirtPrice + shortsPrice);
    let totalSum = tShirtPrice + shortsPrice + socksPrice + buttonsPrice;
    let totalSumWithDiscount = totalSum * 0.85;
    if (totalSumWithDiscount >= bonusPrice) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalSumWithDiscount.toFixed(2)} lv.`)
    } else {
        console.log("No, he will not earn the world-cup replica ball.")
        console.log(`He needs ${(bonusPrice - totalSumWithDiscount).toFixed(2)} lv. more.`)
    }
}
footballKit([59.99, 500])
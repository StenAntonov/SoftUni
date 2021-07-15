function AlcoSHop(input) {
    let whiskeyPrice = Number(input.shift());
    let beerQuantity = Number(input.shift());
    let wineQuantity = Number(input.shift());
    let rakiyaQuantity = Number(input.shift());
    let whiskeyQuantity = Number(input.shift());
    let rakiyaPrice = (whiskeyPrice * 0.5);
    let winePrice = rakiyaPrice - (rakiyaPrice * 0.4);
    let beerPrice = rakiyaPrice - (rakiyaPrice * 0.8);
    let whiskeySum = whiskeyPrice * whiskeyQuantity;
    let rakiyaSum = rakiyaPrice * rakiyaQuantity;
    let beerSum = beerQuantity * beerPrice;
    wineSum = winePrice * wineQuantity;  
    let totalSum = rakiyaSum + wineSum + whiskeySum + beerSum;
    console.log(totalSum.toFixed(2))
}
AlcoSHop([63.44, 3.57, 6.35, 8.15, 2.5])
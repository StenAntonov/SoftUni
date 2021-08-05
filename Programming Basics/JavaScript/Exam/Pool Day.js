function solve(input){
    let peoplesCount = Number(input.shift());
    let entryPrice = Number(input.shift());
    let benchPrice = Number(input.shift());
    let umbrellaPrice = Number(input.shift());
    let entryCost = peoplesCount * entryPrice;
    let benchCosts = Math.ceil((peoplesCount * 0.75)) * benchPrice;
    let umbrellaCosts = Math.ceil((peoplesCount * 0.5)) * umbrellaPrice;
    let totallCosts = entryCost + benchCosts + umbrellaCosts;
    console.log(totallCosts.toFixed(2) + " lv.");
}
solve([21, 5.50, 4.40, 6.20 ])

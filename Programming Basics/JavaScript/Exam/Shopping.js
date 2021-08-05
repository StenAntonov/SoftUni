function solve(input) {
    let budget = Number(input.shift());
    let videoCards = Number(input.shift());
    let processors = Number(input.shift());
    let ram = Number(input.shift());
    let videoCardsPrice = videoCards * 250;
    let processorsPrice = processors * (0.35 * videoCardsPrice);
    let ramPrice = ram * (0.1 * videoCardsPrice);
    let totallCosts = videoCardsPrice + processorsPrice + ramPrice;
    if (videoCards > processors) {
        totallCosts *= 0.85;
    }
    if (totallCosts <= budget) {
        console.log(`You have ${(budget - totallCosts).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totallCosts - budget).toFixed(2)} leva more!`)
    }
}
solve([900, 2, 1, 3])
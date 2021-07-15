function BeerAndChips(input){ 
    let name = input.shift();
    let budget = Number(input.shift());
    let beers = Number(input.shift()) * 1.20;
    let chipsPacks = Number(input.shift());
    let chipsPrice = Math.ceil((beers * 0.45) * chipsPacks);
    let totalSum = beers + chipsPrice;
    if (budget >= totalSum) {
        console.log(`${name} bought a snack and has ${(budget - totalSum).toFixed(2)} leva left.`)
    }else {
        console.log(`${name} needs ${(totalSum - budget).toFixed(2)} more leva!`)
    }
}
BeerAndChips(["Valetin",
    5,
    2,
    4    
    ])
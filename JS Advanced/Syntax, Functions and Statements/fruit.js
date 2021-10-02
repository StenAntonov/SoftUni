function solve(fruit, weigth, price){
    let weightKG = weigth / 1000;
    let money = weightKG * price;
    return `I need $${money.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`
}
console.log(solve('orange', 2500, 1.80));
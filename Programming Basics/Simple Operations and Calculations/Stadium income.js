function solve(input) {
    let sectors = Number(input.shift());
    let capacity = Number(input.shift());
    let ticketPrice = Number(input.shift());
    let totalIncome = capacity * ticketPrice;
    let sectorIncome = totalIncome / sectors;
    let MoneyForCharity = (totalIncome - (sectorIncome * 0.75)) / 8;
    console.log("Total income - " + totalIncome.toFixed(2) + " BGN");
    console.log("Money for charity - " + MoneyForCharity.toFixed(2) + " BGN")
}
solve([8, 10000, 3.25])
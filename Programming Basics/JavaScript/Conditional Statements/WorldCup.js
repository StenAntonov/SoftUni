function worldCup(input) {
    let ticketToGo = Number(input.shift());
    let ticketToComeBack = Number(input.shift());
    let ticketForTheMatch = Number(input.shift());
    let NumberOfGames = Number(input.shift());
    let Discount = Number(input.shift());
    let ticketForTheMatchTotal = (ticketForTheMatch * NumberOfGames) * 6;
    let PlanceTickets = 6 * (ticketToGo + ticketToComeBack);
    let planeTicketsWithDiscount = PlanceTickets - ((PlanceTickets / 100) * Discount);
    let totalSum = ticketForTheMatchTotal + planeTicketsWithDiscount;
    let sumForEach = totalSum / 6;
    console.log(`Total sum: ${totalSum.toFixed(2)} lv.`);
    console.log(`Each friend has to pay ${sumForEach.toFixed(2)} lv.`);
}
worldCup([210,
    235,
    150,
    6,
    12    
    ])
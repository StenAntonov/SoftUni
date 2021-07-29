function solve(input) {
    let vacationCosts = Number(input.shift());
    let currentMoney = Number(input.shift());
    let spendCounter = 0;
    let daysCounter = 0;
    while (currentMoney < vacationCosts) {
        let command = input.shift();
        let ammount = Number(input.shift());
        daysCounter++;
        if (command === "spend") {
            spendCounter++
            currentMoney -= ammount;
            if(spendCounter === 5) {
                break;
            }
            if (currentMoney < 0) {
                currentMoney = 0;
            }
        } else if (command === "save") {
            currentMoney += ammount;
            spendCounter = 0;
        }
    }
    if (spendCounter === 5) {
        console.log(`You can't save the money.`);
        console.log(`${daysCounter}`);
    }else{
        console.log(`You saved the money for ${daysCounter} days.`)
    }
}
    solve([ '250',
    '150',
    'spend',
    '50',
    'spend',
    '50',
    'save',
    '100',
    'save',
    '100' ]
  
  )
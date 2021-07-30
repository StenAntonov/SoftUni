function solve(input) {
    let age = Number(input.shift());
    let washingMachinePrice = Number(input.shift());
    let toyPrice = Number(input.shift());
    let money = 0;
    let toyCount = 0;
    let brotherSteel = 0;
    let moneyForPresent = 10;

    for(i = 1; i <= age; i++) {
        if(i % 2 !== 0) {
            toyCount += 1;
        }else {
            money += moneyForPresent;
            moneyForPresent += 10;
            brotherSteel++
        }
    }
    let moneyFromToys = toyCount * toyPrice;
    let totallMoney = money - brotherSteel + moneyFromToys;
    if(totallMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totallMoney - washingMachinePrice).toFixed(2)}`);
    }else {
        console.log(`No! ${Math.abs(totallMoney - washingMachinePrice).toFixed(2)}`)
    }    
}
solve([21,
    1570.98,
    3    
    ])
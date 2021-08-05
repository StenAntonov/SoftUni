function solve(input) {
    let destination = input.shift();
    while(destination != "End") {
        let neededMoney = Number(input.shift());
        let savedMoney = 0;
        while(savedMoney < neededMoney) {
            let income = Number(input.shift());
            savedMoney += income;
        }
        if(savedMoney >= neededMoney) {
            console.log(`Going to ${destination}!`);
        }
        destination = input.shift();
    }
}
solve([ 'France',
'2000',
'300',
'300',
'200',
'400',
'190',
'258',
'360',
'Portugal',
'1450',
'400',
'400',
'200',
'300',
'300',
'Egypt',
'1900',
'1000',
'280',
'300',
'500',
'End',
'' ])
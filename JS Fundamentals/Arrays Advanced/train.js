function train(input) {
    let wagoons = input.shift().split(' ').map(Number);
    let maxPass = Number(input.shift());
    for (let i = 0 ; i < input.length ; i++) {
        let command = input[i];
        if(command.split(' ').includes('Add')) {
            wagoons.push(Number(command.split(' ')[1]));
        }else {
            command = Number(command);
            for(let j = 0 ; j < wagoons.length ; j++) {
                if(wagoons[j] + command <= maxPass) { 
                    wagoons[j] += command; break;
                }
            }
        }
    }
    return wagoons.join(' ');
}
console.log(train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
));
function arrayManipulations(arr) {
 
    let array = arr.shift().split(' ').map(Number);
    for (let instr of arr) {
        let command = instr.split(' ')[0];
        let firstNum = Number(instr.split(' ')[1]);
        let secondNum = Number(instr.split(' ')[2]);
        switch (command) {
            case 'Add': array.push(firstNum); break;
            case 'Remove': array = array.filter(x => x != firstNum); break;
            case 'RemoveAt': array.splice(firstNum, 1); break;
            case 'Insert': array.splice(secondNum, 0, firstNum); break;
        }
    }
    return array.join(' ');
}
console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
));
function arrayManipulator(arrOfNums, ArrOfCommands) {
    let nums = arrOfNums.slice().map(Number);
    let command = '';
    let commandToDo = command[0];
    let commandIndex = Number(command[1]);
    let element = Number(command[2]);

    for (let z = 0; z < ArrOfCommands.length; z++) {
        command = ArrOfCommands[z].split(' ');
        commandToDo = command[0];
        commandIndex = Number(command[1]);
        element = Number(command[2]);
        if (commandToDo === 'add') {
            nums.splice(commandIndex, 0, element);
        } else if (commandToDo === 'addMany') {
            for (let i = 2; i < command.length; i++) {
                nums.splice(commandIndex, 0, Number(command[i]));
                commandIndex++;
            }
        } else if (commandToDo === 'contains') {
            console.log(nums.indexOf(commandIndex));
        } else if (commandToDo === 'remove') {
            nums.splice(commandIndex, 1);
        } else if (commandToDo === 'shift') {
            for (let j = 0; j < commandIndex; j++) {
                let shift = nums.shift();
                shift = nums.push(shift);
            }
        } else if (commandToDo === 'sumPairs') {
            let sum = [];
            for (let k = 0; k < nums.length; k += 2) {
                if (k + 1 >= nums.length) {
                    sum.push(nums[k]);
                    break;
                }
                sum.push(nums[k] + nums[k + 1]);
            }
            nums = sum;
        } else if (commandToDo === 'print') {
            console.log(`[ ${nums.join(', ')} ]`);
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5, 6, 7], ["sumPairs", "print"]
);    
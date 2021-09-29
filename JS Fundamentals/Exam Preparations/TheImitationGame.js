function solve(input){
    let str = input.shift();
    let command = input.shift();
    while(command !== 'Decode'){
        if(command.includes('Move')){
            let [action, index] = command.split('|');
            index = Number(index);
            let substring = str.substring(0, index);
            str = str.substring(index) + substring;
        }else if(command.includes('Insert')){
            let [action, index, value] = command.split('|');;
            index = Number(index);
            str = str.substring(0, index) + value + str.substring(index);
        }else if(command.includes('ChangeAll')){
            let [action, substring, substitution] = command.split('|');;
            let index = str.indexOf(substring);
            while(index !== -1){
                str = str.replace(substring, substitution);
                index = str.indexOf(substring);
            }
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${str}`)
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  );
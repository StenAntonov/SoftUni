function solve(input){
    let password = input.shift();
    let line = input.shift();
    while(line !== 'Done'){
        if(line == 'TakeOdd'){
            password = password.split('').filter((x, i) => i % 2 == 1).join('');
            console.log(password);
        }else if(line.includes('Cut')){
            let [action, index, length] = line.split(' ');
            index = Number(index);
            length = Number(length);
            let substring = password.substring(index, index + length);
            let startIndex = password.indexOf(substring);
            password = password.substring(0, startIndex) + password.substring(startIndex + substring.length);
            console.log(password);
        }else if(line.includes('Substitute')){
            let [action, substring, substitute] = line.split(' ');
            if(password.includes(substring)){
                let index = password.indexOf(substring);
                while(index != -1){
                    password = password.replace(substring, substitute);
                    index = password.indexOf(substring);
                }
                console.log(password);
            }else{
                console.log(`Nothing to replace!`);
            }
        }
        line = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]
  
  );
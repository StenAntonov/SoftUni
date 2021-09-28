function solve(input) {
    let message = input.shift();
    let line = input.shift();

    while (line !== 'Reveal') {
        line = line.split(':|:');
        command = line.shift();
        if (command == 'InsertSpace') {
            let index = Number(line);
            message = message.slice(0, index) + ' ' + message.slice(index);
            console.log(message);
        }else if (command == 'Reverse') {
            let substring = line[0];
            if (message.includes(substring)) {
                let index = message.indexOf(substring);
                let sliced = message.substring(index, index + substring.length);
                sliced = sliced.split('').reverse().join('')
                message = message.slice(0, index) + message.slice(index + substring.length) + sliced;
                console.log(message);
            }else{
                console.log(`error`);
            }
        }else if(command == 'ChangeAll'){
            let [substring, replacement] = line;
            let index = message.indexOf(substring);
        
            while (index !== -1){
                message = message.substring(0, index) + replacement + message.substring(index + substring.length);
                index = message.indexOf(substring);
            }
            console.log(message);
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${message}`)
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  );
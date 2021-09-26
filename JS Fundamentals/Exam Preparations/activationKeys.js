function solve(input){
    let key = input.shift();
    let command = input.shift().split('>>>');

    while(command[0] !== 'Generate'){
        if(command[0] == 'Slice'){
            let = [toDo, startIndex, endIndex] = command;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            key = key.slice(0, startIndex) + '' + key.slice(endIndex);
           console.log(key);
           
        }else if(command[0] == 'Flip'){
            let [toDo, toCase, startIndex, endIndex] = command;
            let substring = key.substring(startIndex, endIndex);;
            let char = substring.charCodeAt(0);
            if(toCase == 'Lower'){
                substring = substring.toLowerCase();
            }else{
                substring = substring.toUpperCase();
            }
            key = key.slice(0, startIndex) + substring + key.slice(endIndex);
            console.log(key);
        }else if(command[0] == 'Contains'){
            let [toDo, subs] = command;
            if(key.includes(subs)){
                console.log(`${key} contains ${subs}`);
            }else{
                console.log(`Substring not found!`);
            }

        }
        command = input.shift().split('>>>');
    }
    
    console.log(`Your activation key is: ${key}`);
}
solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]
  );
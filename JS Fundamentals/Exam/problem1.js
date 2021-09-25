function solve(input){
    let password = input.shift();
    let command = input.shift();

    while(command !== 'Sign up'){
        let [action, argument, argument2] = command.split(' ');
      
        if(action == 'Case'){
            if(argument == 'lower'){
                password = password.toLowerCase();
            }else{
                password = password.toUpperCase();
            }
            console.log(password);
        }else if(action == 'Cut'){
            if(password.includes(argument)){
                let startIndex = password.indexOf(argument);
                password = password.substring(0, startIndex) + password.substring(startIndex + argument.length);
                console.log(password);
            }else{
                console.log(`The word ${password} doesn't contain ${argument}.`);
            }
        }else if(action == 'Replace'){
            let index = password.indexOf(argument);
            while(index !== -1){
                password = password.replace(argument, '*');
                index = password.indexOf(argument);
            }
            console.log(password);
        }else if(action == 'Check'){
            if(password.includes(argument)){
                console.log('Valid');
            }else{
                console.log(`Your username must contain ${argument}.`);
            }
        }else if(action == 'Reverse'){
            argument = Number(argument);
            argument2 = Number(argument2);
            if(argument >= 0 && argument2 < password.length){
                let substring = password.substring(argument, argument2 + 1);
                substring = substring.split('').reverse().join('');
                console.log(substring);
            }
        }
        command = input.shift();
    }
}
solve([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up' ]);
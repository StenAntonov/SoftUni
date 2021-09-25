function solve(input){
    let users = {};
    let command = input.shift();

    while(command !== 'Statistics'){
        if(command.includes('Add')){
            let [action, name] = command.split('->');
            if(users.hasOwnProperty(name)){
                console.log(`${name} is already registered`)
            }else{
                users[name] = [];
            }
        }else if(command.includes('Send')){
            let [action, name, email] = command.split('->');
            users[name].push(email);
        }else if(command.includes('Delete')){
            let [action, name] = command.split('->');
            if(users.hasOwnProperty(name)){
                delete users[name];
            }else{
                console.log(`${name} not found!`);
            }
        }
        command = input.shift();
    }

    let sorted = Object.keys(users).sort((a, b) => users[b].length - users[a].length || a.localeCompare(b));
    console.log(`Users count: ${sorted.length}`);
    for ( let i = 0 ; i < sorted.length ; i++ ){
        console.log(`${sorted[i]}`);
        users[sorted[i]].forEach(element => {
            console.log(` - ${element}`);
        });
    } 
}
solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
  ]);
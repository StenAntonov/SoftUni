function solve(input){
    let guestList = {};
    guestList.VIP = [];
    guestList.regular = [];
  
    let command = input.shift();
    
    while( command !== 'PARTY') { 
        let char = command[0];
        if(isNaN(char)){
            guestList.regular.push(command);
        }else{
            guestList.VIP.push(command);
        }
        command = input.shift();
    }

    for ( let name of input ){
        if(guestList.VIP.includes(name)){
            let index = guestList.VIP.indexOf(name);
            guestList.VIP.splice(index, 1);
        }else{
            if(guestList.regular.includes(name)){
                let index = guestList.regular.indexOf(name);
                guestList.regular.splice(index, 1);
            }
        }
    }

    let totalGuests = guestList.VIP.length + guestList.regular.length;

    console.log(totalGuests);
    guestList.VIP.forEach( x => console.log(x));
    guestList.regular.forEach( x => console.log(x)); 
    
}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']);
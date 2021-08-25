function dungeon(str) {
    let health = 100;
    let coins = 0;
    let strToArr = str[0].split('|');
    let firstPart = [];
    let secondPart = [];
    let bestRoom = 1;
    for ( let i = 0; i < strToArr.length ; i++) {
        let currentRoom = strToArr[i];
        firstPart = currentRoom.split(' ')[0];
        secondPart = Number(currentRoom.split(' ')[1]);
        
        
        if(firstPart == 'potion') {
            if(health < 100) {
                let healed = secondPart;
                health += healed;
                if(health > 100) {
                    healed = 100 - (health - healed);
                    health = 100;
                }
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }else if(firstPart == 'chest') {
            coins += secondPart;
            console.log(`You found ${secondPart} coins.`);
        }else{
            health -= secondPart;
            if(health > 0) {
                console.log(`You slayed ${firstPart}.`);
            }else{
                console.log(`You died! Killed by ${firstPart}.`);
                console.log(`Best room: ${bestRoom}`);break;
                
            }
        }
        bestRoom++
        if(bestRoom > strToArr.length) {
            console.log(`You've made it!`);
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
        }
    }  
}
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
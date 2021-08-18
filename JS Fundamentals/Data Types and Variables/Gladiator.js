function gladiator(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let helmetsBroken = 0;
    let swordsBroken = 0;
    let shieldsBroken = 0;
    let armourBroken = 0;
    let counter = 1;
    let expenses = 0;
    for( i = 0 ; i < lostFightsCount; i++) {
        if(counter % 2 == 0){
            helmetsBroken++
        }if(counter % 3 == 0){
            swordsBroken++
        }if(counter % 2 == 0 && counter % 3 == 0){
            shieldsBroken++
        }if ( counter == lostFightsCount && shieldsBroken > 0 && shieldsBroken % 2 == 0 ) {
            armourBroken = shieldsBroken / 2;
        }else if ( counter == lostFightsCount && shieldsBroken > 0 && shieldsBroken % 2 == 1 ){
            armourBroken = (shieldsBroken - 1) / 2;
        }
        counter++
    }
    expenses = (helmetPrice * helmetsBroken) + (shieldPrice * shieldsBroken) + (swordPrice * swordsBroken) + (armourPrice * armourBroken);
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(23,
    12.50,
    21.50,
    40,
    200
    )
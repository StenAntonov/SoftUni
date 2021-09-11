function nextLevel(input){
    let neededExperience = input.shift();
    let experienceGained = 0;
    let battleCount = input.shift();
    let battleCounter = 1;

    for ( let i = 0 ; i < input.length ; i++ ){
        let currentBatleExp = input[i];
        if(battleCounter % 5 == 0 && battleCounter % 3 == 0 && battleCounter % 15 == 0){
            currentBatleExp += currentBatleExp * 0.05;
        }else if(battleCounter % 3 == 0){
            currentBatleExp += currentBatleExp * 0.15;
        }else if(battleCounter % 5 == 0) {
            currentBatleExp -= currentBatleExp * 0.10;
        }
        experienceGained += currentBatleExp;
        if(experienceGained >= neededExperience){
            console.log(`Player successfully collected his needed experience for ${battleCounter} battles.`);
            break;
        }
        battleCounter++
         
    }
    if(neededExperience > experienceGained){
        let needMore = neededExperience - experienceGained;
        console.log(`Player was not able to collect the needed experience, ${needMore.toFixed(2)} more needed.`);
        
    }
}
nextLevel([400,
    5,
    50,
    100,
    200,
    100,
    20])
    
function GameStatistics(input) {
    let minutes = Number(input.shift());
    let playerName = input.shift();
    if (minutes == 0) {
        console.log("Match has just began! ");
    } else if (0 < minutes && minutes < 45) {
        console.log("First half time.");
    } else if (minutes >= 45) {
        console.log("Second half time.");
    }
    if (1 <= minutes && minutes <= 10) {
        console.log(`${playerName} missed a penalty.`);
        if (minutes % 2 == 0) 
        console.log(`${playerName} was injured after the penalty.`);
    }
    if (10 < minutes && minutes <= 35 ) {
        console.log(`${playerName} received yellow card.`);
        if(minutes % 2 != 0)
        console.log(`${playerName} got another yellow card.`)
    }
    if (35 < minutes && minutes < 45 ) {
        console.log(`${playerName} SCORED A GOAL !!!`);
    }
    if (45 < minutes && minutes <= 55 ) {
        console.log(`${playerName} got a freekick.`);
        if(minutes % 2 == 0)
        console.log(`${playerName} missed the freekick.`)
    }
    if (55 < minutes && minutes <= 80 ) {
        console.log(`${playerName} missed a shot from corner.`);
        if(minutes % 2 != 0)
        console.log(`${playerName} has been changed with another player.`)
    }
    if (80 < minutes && minutes <= 90 ) {
        console.log(`${playerName} SCORED A GOAL FROM PENALTY !!!`);
    }
    
} 
GameStatistics([25, "Ronaldo"])
function solve(input){
    let gamesSelled = Number(input.shift());
    let gameName = "";
    let heartCount = 0;
    let heartPer = 0;
    let fortNum = 0;
    let fortPer = 0;
    let overNum = 0;
    let overPer = 0;
    let othersNum = 0;
    let othersPer = 0;
    for (let i = 0; i < gamesSelled; i++){
        gameName = input.shift();
        if(gameName === "Hearthstone") {
            heartCount++
        }else if(gameName === "Fornite"){
            fortNum++
        }else if(gameName === "Overwatch") {
            overNum++
        }else {
            othersNum++
        }
    }
    heartPer = heartCount * 100 / gamesSelled;
    fortPer = fortNum * 100 / gamesSelled;
    overPer = overNum * 100 / gamesSelled;
    othersPer = othersNum * 100 / gamesSelled;
    console.log(`Hearthstone - ${heartPer.toFixed(2)}%`);
    console.log(`Fornite - ${fortPer.toFixed(2)}%`);
    console.log(`Overwatch - ${overPer.toFixed(2)}%`);
    console.log(`Others - ${othersPer.toFixed(2)}%`);
}
solve([4, "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"])
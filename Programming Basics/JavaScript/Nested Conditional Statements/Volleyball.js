function solve(input){
    let typeOfYear = input.shift();
    let celebNotInSatAndSun = Number(input.shift());
    let weekendAtHomeCity = Number(input.shift());
    let weekendsInSofia = 48 - weekendAtHomeCity;
    let weekendsInSofiaNotWorking = weekendsInSofia * 3/4;
    let celebGames = celebNotInSatAndSun * 2/3;
    let totalGamesInAnyKindYear = weekendAtHomeCity + weekendsInSofiaNotWorking + celebGames;
    if (typeOfYear === "leap") {
        console.log(parseInt(totalGamesInAnyKindYear * 1.15));
    }else {
        console.log(parseInt(totalGamesInAnyKindYear));
    }
}
solve(["leap", 2, 3])
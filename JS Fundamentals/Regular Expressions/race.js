function solve(input) {
    let list = input.shift().split(', ');
    let racers = {};
    list.forEach(element => {
        racers[element] = 0;
    });

    for ( const line of input ) {
        let patternName = /[A-Za-z]+/g;
        let score = /\d/g;
        let matchName = line.match(patternName).join('');
        if(racers.hasOwnProperty(matchName)){
            let matchScore = line.match(score)
            .map(Number)
            .reduce((a, b) => a + b);
            racers[matchName] += matchScore;
        }
        
    }
    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

    console.log(`1st place: ${sorted[0]}: ${racers[sorted[0]]}`);
    console.log(`2nd place: ${sorted[1]}: ${racers[sorted[1]]}`);
    console.log(`3rd place: ${sorted[2]}: ${racers[sorted[2]]}`);
}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
   'end of race']);
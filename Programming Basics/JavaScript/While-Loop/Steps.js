function solve(input) {
    let stepsCounter = 0;
    let stepsGoal = 10000;
    let stepsReached = 0;
    while(stepsReached < stepsGoal) {
        stepsCounter = input.shift();
        let steps = Number(stepsCounter);
        if(stepsCounter === "Going home") {
            steps = Number(input.shift());
            stepsReached += steps;
            break;
        }
        stepsReached += steps;
    }
    if(stepsReached >= stepsGoal) {
    console.log(`Goal reached! Good job!`)
    }else {
        console.log(`${stepsGoal - stepsReached} more steps to reach goal.`)
    }
}
solve([125,
    250,
    4000,
    30,
    2678,
    4682
    
    ])
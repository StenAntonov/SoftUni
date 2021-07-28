function solve(input) {
    let poorGradesLimit = Number(input.shift());
    let poorGradesCounter = 0;
    let taskName = input.shift();
    let grade = Number(input.shift());
    let avgGrade = 0;
    let taskCounter = 0;
    let lastProblem = "any";
    while (taskName !== "Enough" && grade !== "Enough") {
        lastProblem = taskName;
        taskCounter++
        avgGrade += grade
        if(grade <= 4) {
            poorGradesCounter++
            if(poorGradesCounter == poorGradesLimit){
                console.log(`You need a break, ${poorGradesCounter} poor grades.`);
                break;
            }
        }
        taskName = input.shift();
        grade = Number(input.shift());
    }
    if (taskName == "Enough" || grade == "Enough") {
        console.log(`Average score: ${(avgGrade / taskCounter).toFixed(2)}`)
        console.log(`Number of problems: ${taskCounter}`)
        console.log(`Last problem: ${lastProblem}`)
    }
}
solve([2,
    "Income",
    3,
    "Game Info",
    6,
    "Best Player",
    4
    
    ])
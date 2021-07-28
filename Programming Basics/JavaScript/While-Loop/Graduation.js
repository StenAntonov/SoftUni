function solve(input) {
    let name = input.shift();
    let avgGrade = 0;
    let counter = 0;
    while(counter < 12) {
        let currentYear = Number(input.shift());
        if(currentYear >= 4) {
        avgGrade += currentYear;
        counter++
        }
    }
    console.log(`${name} graduated. Average grade: ${(avgGrade / 12).toFixed(2)}`)
}
solve(["Ani",
5,
5.32,
6,
5.43,
5,
6,
5.5,
4.55,
5,
6,
5.56,
6
    ])
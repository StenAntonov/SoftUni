function solve(input) {
    let name = input.shift();
    let avgGrade = 0;
    let counter = 0;
    let failed = 0;
    while(counter < 12) {
        let currentYear = Number(input.shift());
        if(currentYear >= 4) {
        avgGrade += currentYear;
        }else if(currentYear < 4) {
            failed += 1;
            if( failed > 1) {
                console.log(`${name} has been excluded at ${counter} grade`);
                break;
            }
        }
        counter++
    } if(counter == 12) {
     console.log(`${name} graduated. Average grade: ${(avgGrade / 12).toFixed(2)}`)
    }
}
solve(["Mimi",
5,
6,
5,
6,
5,
6,
6,
2,
3
    ])
function solve(input) {
    let students = new Map();

    for (let line of input) {
        let currentLine = line.split(' ');
        let name = currentLine.shift();
        let grades = currentLine.map(Number);
        if (!students.has(name)) {
            students.set(name, []);
        }

        let existing = students.get(name);
        for (const score of grades) {
            existing.push(score);
        }
    }
    
    let sorted = Array.from(students.entries());
    
    sorted.sort(compare);

   for ( let [name, grades] of sorted ){
       console.log(`${name}: ${grades.join(', ')}`);
   }
    

    
    function compare([nameA, gradesA], [nameB, gradesB]){
        let avgA = 0;
        gradesA.forEach( x => { avgA += x });
        avgA = avgA / gradesA.length;

        let avgB = 0;
        gradesB.forEach( x => avgB += x);
        avgB = avgB / gradesB.length;
        
        return avgA - avgB;
    }

}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
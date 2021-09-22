function solve(input){
    input = input[0];
    let pattern = /\b(?<day>[0-9]{2})([/\-.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let matches = pattern.exec(input);
    while( matches !== null ){
        let day = matches.groups['day'];
        let month = matches.groups['month'];
        let year = matches.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
        matches = pattern.exec(input);
    }
}
solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016']);
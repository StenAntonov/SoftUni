function solve(input) {
    let pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    str = input.shift();
    let supplies = [];
    let totalCalories = 0;

    let matches = pattern.exec(str);

    while (matches != null) {
        let item = matches.groups.item;
        let date = matches.groups.date;
        let calories = Number(matches.groups.calories);
        supplies.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
        totalCalories += calories;
        matches = pattern.exec(str);
    }
    
    console.log(`You have food to last you for: ${Math.trunc(totalCalories / 2000)} days!`);
    console.log(supplies.join('\n'));
}
solve([
    'Hello|#Invalid food#19/03/20#450|$5*(@']);

solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
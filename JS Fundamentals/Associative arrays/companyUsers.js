function solve(arr){
    let companies = {};
    for ( let line of arr) {
        let [company, id] = line.split(' -> ');
        if(!companies.hasOwnProperty(company)){
            companies[company] = [];
        }
        if(!companies[company].includes(id)){
            companies[company].push(id);
        }
    }

    let sorted = Object.keys(companies).sort();
    for ( let i of sorted){
        console.log(i);
        Object.values(companies[i]).forEach(element => {
            console.log(`-- ${element}`)
        });
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );
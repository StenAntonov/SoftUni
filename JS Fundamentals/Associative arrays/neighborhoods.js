function solve(arr){
    let neighborhoods = arr.shift().split(', ');
    let neighborhood = new Map();

    for (const line of neighborhoods) {
        neighborhood.set(line, []);
    }
    for (let  line of arr) {
        let [neighb, person] = line.split(' - ');
        if(neighborhood.has(neighb)){
            neighborhood.get(neighb).push(person);
        }
    }
    let sorted = Array.from(neighborhood).sort( (a , b) => b[1].length - a[1].length );
    
    for (const [neighbName, persons] of sorted) {
        console.log(`${neighbName}: ${persons.length}`);
        persons.forEach(element => {
            console.log(`--${element}`);
            
        });
    }

}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);
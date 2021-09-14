function solve(input){
    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook).sort( (a,b) => a[0].localeCompare(b[0]));
    for ( let line of sorted){
        console.log(`${line[0]} -> ${line[1]}`);
    }
    
}
solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
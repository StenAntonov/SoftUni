function solve(input){
    let pattern = />>(?<Name>[A-Z]+[a-z]*)<<(?<Price>\d+\.?\d+)!(?<Quantity>\d+)/;
    let total = 0;
    console.log(`Bought furniture:`);
    for ( const line of input ){
        let match = pattern.exec(line);
        if(match){
            console.log(match.groups['Name']);
            total += Number(match.groups['Price']) * Number(match.groups['Quantity']);
        }
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}
solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);
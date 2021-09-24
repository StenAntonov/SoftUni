function solve(input){
    let pattern = /%(?<customer>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>\w+)>([^\|\$%\.]+)?\|(?<count>\d+)\|([^\|\$%\.\d]+)?(?<price>\d+(\.\d+)?)\$/;
    let totalIncome = 0;
    for ( const line of input ) {
        let match = pattern.exec(line);
        if(match){
            totalIncome += Number(match.groups.price) * Number(match.groups.count);
            console.log(`${match.groups.customer}: ${match.groups.product} - ${(Number(match.groups.price) * Number(match.groups.count)).toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
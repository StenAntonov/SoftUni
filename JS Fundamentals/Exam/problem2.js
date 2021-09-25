function solve(input){
    let count = Number(input.shift());
    let pattern = /(?<symbols>[\s\S]+)>(?<digits>\d{3})\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|(?<symbolsEnd>[^><]{3})<\1/;

    for ( let i = 0 ; i < count ; i++ ){
        let str = input.shift();
        let matches = pattern.exec(str);
        if(matches){
            let digits = matches.groups.digits;
            let lower = matches.groups.lower;
            let upper = matches.groups.upper;
            let symbolsEnd = matches.groups.symbolsEnd;
            let encrypted = digits + lower + upper + symbolsEnd;
            console.log(`Password: ${encrypted}`);
        }else{
            console.log(`Try another password!`);
        }
    }
}
solve([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$']);


solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'])
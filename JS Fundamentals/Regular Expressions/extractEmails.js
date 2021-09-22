function solve(input){
    input = input[0];
    let pattern = /\b(?<user>\w+[\.\-\_]?\w+)@(?<host>([A-Za-z]+\.?\-?[A-Za-z]+)\.([A-Za-z]+\.?\-?[A-Za-z]+))\b/gm;
    let match = input.match(pattern);
    for ( const line of match ){
        console.log(line);
    }
    
}
solve(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);
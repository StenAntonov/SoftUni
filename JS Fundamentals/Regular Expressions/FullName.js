function solve(input){
    input = input[0];
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let matches = input.match(pattern);
    console.log(matches.join(' '));
}
solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
  ])
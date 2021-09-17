function solve(sentence, word){
    let found = sentence.indexOf(word);
    while (found != -1){
        sentence = sentence.replace(word, "*".repeat(word.length));
        found = sentence.indexOf(word);
    }
    console.log(sentence)
}
solve("A small sentence small with small some words", "small")
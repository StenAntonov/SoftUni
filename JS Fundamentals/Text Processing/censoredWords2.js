function solve(text, word){
    console.log(text.split(word).join("*".repeat(word.length)))
}
solve("A small sentence small with small some words", "small")
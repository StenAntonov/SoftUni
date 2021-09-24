function solve(word, text){
    let regex = new RegExp(`${word}`, 'g'); 
    let match = text.match(regex);
    while(match !== null){
        text = text.replace(regex, '');
        match = text.match(regex);
    }
    console.log(text)

}
solve("ice", "kicegiciceeb")
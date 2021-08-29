function characters(first, second) {
    let firstCharacter = first.charCodeAt();
    let secondCharacter = second.charCodeAt();
    let start= firstCharacter < secondCharacter ? firstCharacter: secondCharacter;
    let end = firstCharacter > secondCharacter ? firstCharacter: secondCharacter;
    let result = '';
    for( let i = start + 1; i < end ; i++ ){
        result += String.fromCharCode(i) + ' ';
        
    }
    return result;
}
console.log(characters('a', 'd'));

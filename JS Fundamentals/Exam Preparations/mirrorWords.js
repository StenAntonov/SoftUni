function solve(input){
    input = input[0];
    let validPairs = [];
    let mirrorWords = [];
    let pattern = /([@#])[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
    let matches = input.match(pattern);
    if(matches){
        matches.forEach(element => {
            validPairs.push(element);
        });
    }
    
    if(validPairs.length > 0) {
        console.log(`${validPairs.length} word pairs found!`);
    }else{
        console.log(`No word pairs found!`);
    }
    for ( let pair of validPairs ){
        let regex = /[A-Za-z]+/g;
        let [word1, word2] = pair.match(regex);
        if(word1 === word2.split('').reverse().join('')){
            mirrorWords.push(word1, word2);
        }
        
    }
    if(mirrorWords.length > 0){
        console.log(`The mirror words are:`);
        let str = '';
        let arr = []
        for (let i = 0 ; i < mirrorWords.length ; i += 2) {
            str = mirrorWords[i] + ' <=> ' + mirrorWords[i + 1];
            arr.push(str);
        }
        console.log(arr.join(', '));
    }else{
        console.log(`No mirror words!`)
    }

}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
  ]
  )
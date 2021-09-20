function solve(arr){
    let firstStr = arr.shift();
    let secondStr = arr.shift();
    let word = '';
    if(!arr.includes(" ")){
        word = arr.shift();
    }
    let result = '';
    let copyWord = word.slice().toUpperCase().split('');;
    result = firstStr.concat(secondStr).split('');
    
    for ( let i = 0; i < result.length ; i++ ) {
        let char = result[i].toLocaleLowerCase();
        if(char === String.fromCharCode(97) || char === String.fromCharCode(101) || char === String.fromCharCode(105) || char === String.fromCharCode(111) || 
        char === String.fromCharCode(117)) {
            for ( let j = 0 ; j <= copyWord.length ; j++ ){
                let ch = copyWord.shift();
                result[i] = ch;
                if(copyWord.length == 0){
                    copyWord = word;
                    copyWord = word.slice().toUpperCase().split('');
                }
                break;
            }
        }
    }
    console.log(`Your generated password is ${result.reverse().join('')}`);
}
solve([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]
    
    );
function solve(input) {
    let str = input.split(' ');
    for (let word of str) {
        if (word.startsWith('#') && word.length > 1) {
            let invalid = false;
            let wordForPrint = word.substring(1);
            for (let i = 0; i < wordForPrint.length; i++) {
                let ch = wordForPrint.charCodeAt(i);
                if (ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122) {
                    continue;
                } else {
                    invalid = true;
                    break;
                }
            }
            if(invalid == false){
                console.log(wordForPrint);
            }
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
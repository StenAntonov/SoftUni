function solve(input) {
    input = input.split(' ');
    let sum = 0;

    for (let word of input) {
        let number = 0;
        if (word.length > 1) {
            word = word.split('');
            let firstLetter = word.shift();
            let firstCode = firstLetter.charCodeAt();
            let secondLetter = word.pop();
            let secondCode = secondLetter.charCodeAt();
            let num = Number(word.join(''));
            if (firstCode >= 65 && firstCode <= 90) {
                let firstPos = firstCode - 64;
                number = num / firstPos;
            } else if (firstCode >= 97 && firstCode <= 122) {
                firstPos = firstCode - 96;
                number = num * firstPos;
            }
            if (secondCode >= 65 && secondCode <= 90) {
                let secondPos = secondCode - 64;
                number -= secondPos;
            } else if (secondCode >= 97 && secondCode <= 122){
                secondPos = secondCode - 96;
            number += secondPos;
            }
        }
        sum += number;
    }
    console.log(sum.toFixed(2));
}
solve('P34562Z q2576f   H456z')
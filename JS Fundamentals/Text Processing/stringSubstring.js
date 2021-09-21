function solve(sub, input) {
    let strToLowerCase = input.toLowerCase().split(' ');
    let word = sub.toLowerCase();
    if(strToLowerCase.includes(word)){
        console.log(word)
    }else{
        console.log(`${word} not found!`)
    }
}
solve('python',
'JavaScriptpython is the best programming language'

)
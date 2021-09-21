function solve(input){
    let str = input.split('');
    let newStr = [];
    for (let i = 0; i< str.length ; i++) {
        let char = str[i];
        if(!newStr.includes(char)){
            newStr.push(char);
        }else{
            if(newStr[newStr.length - 1] != char){
                newStr.push(char);
            }
        }
    }
    console.log(newStr.join(''));
}
solve('aaaaabbbbbcdddeeeedssaa');
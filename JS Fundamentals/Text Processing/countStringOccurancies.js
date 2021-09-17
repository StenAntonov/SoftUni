function solve(text, word){
    let counter = 0;
    let words = text.split(' ');
     for (let current of words) {
         if(current === word){
            counter++
         }
     }
    console.log(counter);
}
solve("This is a word and it also is a sentence",
"is"
)
function solve(input){
    let str = input[0].split(' ');
    let words = input[1];

    for ( let i = 0 ; i < str.length ; i++ ){
        let word = str[i];
        if(word.includes('_')){
            let length = word.length;
            for (const phrase of words) {
                if(word.endsWith(',') || word.endsWith('.')){
                    word = word.substring(0, word.length - 1);
                }
                if(word.length == phrase.length){
                    str[i] = phrase;
                }
            }
        }
    } 
    console.log(str.join(' '));
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);
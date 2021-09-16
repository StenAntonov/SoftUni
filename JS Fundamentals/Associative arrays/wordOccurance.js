function solve(input) {
    let wordOccurance = {};

    for ( let word of input ){
        let present = word;
        if(wordOccurance.hasOwnProperty(present)){
            wordOccurance[present] += 1;
        }else{
         wordOccurance[present] = 1;   
        }

    }
    let sorted = Object.entries(wordOccurance).sort( (a, b) => b[1] - a[1]);
        
    sorted.forEach(element => {
        console.log(`${element[0]} -> ${element[1]} times`);
        
    });
    
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
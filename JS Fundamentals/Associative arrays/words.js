function solve(arr){
    let count = {};
    let tokens = arr.shift().split(' ');

    for( let word of tokens ) {
        count[word] = 0;
    }
    for ( let line of arr ) {
        if(count.hasOwnProperty(line)){
            count[line] += 1;
        }
    }

    Object.keys(count).sort( (a, b) => count[b] - count[a]).forEach( el => {
        console.log(`${el} - ${count[el]}`);
        
    })
    
}
solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task']);
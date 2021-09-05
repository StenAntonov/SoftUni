function sorting(arr){
    let descending = arr.sort( (a,b) => b-a ).slice() ;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let current = 0;
        if(i % 2 == 0){
            current = descending.shift();
            result.push(current);
        }else{
            current = descending.pop();
            result.push(current);
        }
        
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
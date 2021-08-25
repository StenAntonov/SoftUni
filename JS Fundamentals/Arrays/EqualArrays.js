function equalArrays(arr1, arr2) {
    let sum = 0;
    let curr = 0;
    let diff = 0;
    for (let i = 0; i < arr1.length; i++) {
        curr = i;
        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
        } else {
            diff += 1;
            break;
        }
    }
    if(diff !== 0){
        console.log(`Arrays are not identical. Found difference at ${curr} index`);
    }else{
    console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1','2','3','4','5'], ['1','2','3','4','5'])
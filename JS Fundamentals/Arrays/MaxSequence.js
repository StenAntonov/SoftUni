function maxSeq(arr){
    let max = [];
    let maxlength = 0;
    let currentLength = 1;
    let previousNum = 0;
    let index = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        let currentNum = arr[i];
        if (i == 0){
            previousNum = currentNum;
        }
        if((currentNum == previousNum) && (i !== 0)){
            currentLength++;
        }else if(currentNum !== previousNum) {
           
            if(currentLength > maxlength){
                index = previousNum;
                maxlength = currentLength;
                
            }
            previousNum = currentNum;
            currentLength = 1;
        }

    }
    if (currentLength == arr.length){
        maxlength = currentLength;
    }
    for ( j = 0 ; j < maxlength ; j++){
        max.push(index);
    }
    console.log(max.join(' '))
}
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3])
function searchForNum(arr, arr1){
    
    let count = arr1[0];
    let nums = arr.slice(0, count);
    let toDelete = nums.splice(0, arr1[1]);
    let searchNum = arr1[2];
    
    let counter = 0;
    for( let i = 0 ; i < nums.length ; i++ ) {
        if(nums[i] === searchNum){
            counter++
        }
    }
    console.log(`Number ${searchNum} occurs ${counter} times.`);
    
    

}
searchForNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );
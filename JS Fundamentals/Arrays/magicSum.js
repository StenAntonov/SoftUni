function magicSum(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = 0;
           
                sum = arr[i] + arr[j];
            
            let resultForPrint = [];
            if (sum == n) {
                if(result.includes(arr[i])) {
                    break;
                }else if (result.includes(arr[j])) {
                    break;
                }else{
                    result.push(arr[i]);
                    result.push(arr[j]);
                    resultForPrint.push(arr[i]);
                    resultForPrint.push(arr[j]);
                    console.log(resultForPrint.join(' '));
                }

            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6],
    6
    
    )
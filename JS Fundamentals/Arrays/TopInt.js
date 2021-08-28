function top(arr) {
    let newArr = [];
    let counter = 1;
    for (i = 0; i < arr.length; i++) {
        let curr = arr[i];
        for (j = counter; j < arr.length ; j++) {
            let toCompare = arr[j];
            if (curr > toCompare) {
                if(j == arr.length - 1) {
                    newArr.push(curr);
                }
            }else {
                break;
            }
        }
        counter++
    }
    newArr.push(arr.pop());
    console.log(newArr.join(' '));
}
top([41 ,41, 34, 20])
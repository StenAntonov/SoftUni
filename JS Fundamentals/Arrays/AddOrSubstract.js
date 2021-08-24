function addOrSubstract(arr) {
    let sumNew = 0;
    let sumOld = 0;

    for (let el of arr) {
        sumOld += el;
    }
    for (let i = 0; i < arr.length; i ++) {
        let current = arr[i];
        if (current % 2 == 0) {
            arr[i] += i;
        } else{
            arr[i] -= i;
        }
    }
    for (let el of arr) {
        sumNew += el;
    }
    console.log(arr);
    console.log(sumOld);
    console.log(sumNew);
}
addOrSubstract([5, 15, 23, 56, 35])
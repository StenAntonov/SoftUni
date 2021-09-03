function lastK(n, k) {
    let myArr = [1];
    for (let i = 1; i < n; i++) {
         let lastK = myArr.slice(-k);
        let sum = 0;
        for ( let num of lastK) {
            sum += num;
        }
        myArr.push(sum);
    }
    console.log(myArr.join(' '));
    
}
lastK(6 , 3)

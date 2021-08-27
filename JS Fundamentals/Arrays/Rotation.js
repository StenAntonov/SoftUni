function rotation(arr, n) {
    for (let i = 1; i <= n; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement)
    }
    console.log(arr.join(' '));
    
}
rotation([51, 47, 32, 61, 21], 2)
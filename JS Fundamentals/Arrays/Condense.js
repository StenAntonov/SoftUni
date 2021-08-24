function condensed(arr) {
    while (arr.length > 1) {
        let condese = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condese[i] = arr[i] + arr[i + 1];
        }
        arr = condese;
    }
    console.log(arr.toString())
}
condensed([2, 10, 3])
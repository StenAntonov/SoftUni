function factorial(n, m) {
    let firstFactorial = fact(n);
    let secondFactorial = fact(m);
    let result = firstFactorial / secondFactorial;
    function fact(j) {
        let sum = j;
        while (j > 1) {
            j--
            sum *= j;
        }
        return sum;
    }
    console.log(result.toFixed(2));
}
factorial(6, 2)

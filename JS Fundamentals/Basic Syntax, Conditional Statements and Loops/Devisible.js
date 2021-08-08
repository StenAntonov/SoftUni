function solve() {
    currentNum = 0;
    for (i = 1 ; i <= 100 ; i++) {
        currentNum = i;
        if(i % 3 == 0) {
            console.log(currentNum);
        }
    }
}
solve()
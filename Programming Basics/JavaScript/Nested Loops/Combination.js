function solve(input) {
    let n = Number(input.shift());
    let counter = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let h = 0; h <= n; h++) {
                for (let k = 0; k <= n; k++) {
                    for (let l = 0; l <= n; l++) {
                        let result = i + j + h + k + l;
                        if(result == n) {
                            counter++
                        }
                    }
                }
            }
        }
    }
    console.log(counter)
}
solve([25])
function solve(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num % 2 === 0) {
            p1++;
        }
        if (num % 3 === 0) {
            p2++;
        }
        if (num % 4 === 0) {
            p3++;
        }

    }
    p1 = p1 / n * 100;
    p2 = p2 / n * 100;
    p3 = p3 / n * 100;
    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
}
solve([10,
    680,
    2,
    600,
    200,
    800,
    799,
    199,
    46,
    128,
    65
    ])
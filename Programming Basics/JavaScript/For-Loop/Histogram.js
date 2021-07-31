function solve(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num < 200) {
            p1++;
        } else if (num >= 200 && num < 400) {
            p2++;
        } else if (num >= 400 && num < 600) {
            p3++;

        } else if (num >= 600 && num < 800) {
            p4++;

        }else if( num >= 800 && num <= 1000) {
            p5++
        }
    }
    p1 = p1 / n * 100;
    p2 = p2 / n * 100;
    p3 = p3 / n * 100;
    p4 = p4 / n * 100;
    p5 = p5 / n * 100;
    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");

}
solve([7,
    800,
    801,
    250,
    199,
    399,
    599
    ])
function covers(input) {
    let tables = Number(input.shift());
    let lenght = Number(input.shift());
    let widht = Number(input.shift());
    let cloth = tables * (lenght + 2 * 0.30) * (widht + 2 * 0.30);
    let carets = tables * (lenght / 2) * (lenght / 2);
    let USD = (cloth * 7 + carets * 9)
    console.log(USD.toFixed(2) + " USD");
    console.log((USD * 1.85).toFixed(2) + " BGN")
}
covers([10, 1.2, 0.65])
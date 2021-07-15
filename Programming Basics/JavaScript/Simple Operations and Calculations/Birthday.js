function birthday(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let z = Number(input.shift());
    let proc = Number(input.shift()) * 0.01;
    let obem = a * b * z;
    let litri = obem * 0.001;
    let voda = litri * (1 - proc);
    console.log(voda.toFixed(3));
}
birthday([105, 77, 89, 18.5])

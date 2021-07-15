function Converter(input) {
    let kurs = 1.79549;
    let USD = Number(input.shift());
    let BGN = USD * kurs;
    console.log(BGN.toFixed(2));
}
Converter([100])
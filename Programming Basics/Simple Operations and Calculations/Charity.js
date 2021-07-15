function charity(input) {
    let daysCount = Number(input.shift());
    let bakersCount = Number(input.shift());
    let cakesCount = Number(input.shift());
    let wafflesCount = Number(input.shift());
    let pancakesCount = Number(input.shift());
    let cakesSum = cakesCount * 45;
    let wafflesSum = wafflesCount * 5.80;
    let pancakesSum = pancakesCount * 3.20;
    let totalSum = (cakesSum + wafflesSum + pancakesSum) * bakersCount;
    let campain = totalSum * daysCount;
    let withoutExp = campain - (campain * 0.125);
    console.log(withoutExp.toFixed(2))
}
charity([ '131', '5', '9', '33', '46', '' ])
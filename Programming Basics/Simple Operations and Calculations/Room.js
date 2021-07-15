function room(input) {
    let L = Number(input.shift());
    let W = Number(input.shift());
    let A = Number(input.shift());
    let area = (L * 100) * (W * 100);
    let drawler = (A * 100) * (A * 100);
    let bench = area / 10;
    let space = area - (drawler + bench);
    let dancer = Math.floor(space / (40 + 7000));
    console.log(dancer);
}
room([50, 25, 2])
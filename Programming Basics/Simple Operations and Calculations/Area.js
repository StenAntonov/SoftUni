function area(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let lenght = Math.abs(x1 - x2);
    let widht = Math.abs(y1 - y2);
    let area = lenght * widht;
    let perimeter = 2 * (lenght + widht);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
area([30, 40, 70, -10])
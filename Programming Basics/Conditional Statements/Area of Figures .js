function area(input) {
    let type = input.shift();
    let area = 0;
    if (type == "square") {
        let side = Number(input.shift());
        area = side * side;
        
    } else if (type == "rectangle") {
        let side1 = Number(input.shift());
        let side2 = Number(input.shift());
        area = side1 * side2;
        
    } else if (type === "circle") {
        let r = Number(input.shift());
        area = Math.PI * Math.pow(r, 2);
       
    } else {
        let side = Number(input.shift());
        let h = Number(input.shift());
        area = side * h / 2;
        
    }
    console.log(area.toFixed(3));

}
area(["triangle", 4.5, 20])
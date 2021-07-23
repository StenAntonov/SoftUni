function cinema(input) {
    let type = input.shift();
    let rows = Number(input.shift());
    let column = Number(input.shift());
    switch(type) {
        case "Premiere": console.log(`${(rows * column * 12).toFixed(2)} leva`);break;
        case "Normal": console.log(`${(rows * column * 7.5).toFixed(2)} leva`);break;
        case "Discount": console.log(`${(rows * column * 5).toFixed(2)} leva`);break;
    }
}
cinema(["Discount",
    12,
    30    
])
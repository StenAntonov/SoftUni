function rounding(num , precision) {
    if (precision > 15) {
        precision = 15;
    }
    if( precision <= 15 ) {
        console.log(parseFloat(num.toFixed(precision)));
    }  
}
rounding(3.0000000, 2)
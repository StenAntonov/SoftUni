function intOrFloat(num1, num2, num3) {
    let result = num1 + num2 + num3;
    if ( Math.trunc(result) == result) {
        console.log(result + ' - Integer');   
    }else {
        console.log(result + ' - Float');
    }
}
intOrFloat(9, 100, 1.1)
intOrFloat(100, 200, 303)
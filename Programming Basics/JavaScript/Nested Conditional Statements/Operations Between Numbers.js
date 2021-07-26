function operations(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let symbol = input.shift();
    let result = 0;
    switch (symbol) {
        case "+":
            result = a + b;
            ; break;
        case "-":
            result = a - b;
            ; break;
            case "*":
            result = a * b;
            ; break;
            case "/":
            result = (a / b).toFixed(2);
            ; break;
            case "%":
            result = a % b;
            ; break;
    }
    if (symbol === "+" || symbol === "-" || symbol === "*") {
       let evenOdd = result % 2;
       if ( evenOdd == 0) {
           console.log(`${a} ${symbol} ${b} = ${result} - even`)
       }else { 
        console.log(`${a} ${symbol} ${b} = ${result} - odd`)
       }
    }else if( symbol === "/" && b == 0 || symbol === "%" && b==0) {
        console.log(`Cannot divide ${a} by zero`)
    }else {
        console.log(`${a} ${symbol} ${b} = ${result}`)
    }
}
operations([112, 0, "/"])

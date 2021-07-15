function equals(input){
    let num1 = parseInt(input.shift());
    let num2 = parseInt(input.shift());
    let num3 = parseInt(input.shift());
    if (num1 == num2 && num2 == num3) {
        console.log("yes");
    } else 
        console.log("no");
    }
equals([4, 4, 4])
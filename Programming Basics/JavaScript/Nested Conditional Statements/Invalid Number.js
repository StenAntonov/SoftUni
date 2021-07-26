function invalidNumber(input) {
    let number = Math.trunc(Number(input.shift()));
    if (number == 0 || (number >= 100 && number<= 200)) {
    } else {
        console.log("invalid")
    }
}
invalidNumber([75])
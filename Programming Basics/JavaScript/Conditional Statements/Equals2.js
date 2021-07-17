function equals(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    if (a !== b) {
        console.log("no");
    } else if (b !== c){
        console.log("no");
    }else{
        console.log("yes");
    }
}
equals([1, 1, 1])
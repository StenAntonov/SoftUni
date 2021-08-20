function upOrLow(n) {
    let num = n.charCodeAt();
    if( num > 96) {
        console.log(`lower-case`)
    }else{
    console.log(`upper-case`);
    }
}
upOrLow("L")
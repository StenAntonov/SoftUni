function spiceMustFlow(yield) {
    let days = 0;
    let spice = 0;
    let spiceTotal = 0;
    while ( yield >= 100) {
        spice = yield - 26;
        spiceTotal += spice;
        yield -= 10;
        days++

    }
    if(yield < 100 && spiceTotal >= 26) {
        spiceTotal -= 26;
    }else {
        spiceTotal = 0;
    }
    
    console.log(days);
    console.log(spiceTotal)
}
spiceMustFlow (111)
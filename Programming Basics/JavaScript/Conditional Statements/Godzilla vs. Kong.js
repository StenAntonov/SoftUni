function film(input) {
    let budget = Number(input.shift());
    let statisti = Number(input.shift());
    let oblekloCenaBroi = Number(input.shift());
    let dekorCena = budget * 0.10;
    let oblekloCena = statisti * oblekloCenaBroi;
    if (statisti > 150) {
        oblekloCena = oblekloCena * 0.9;
    }
    let obshto = dekorCena + oblekloCena;
    let Money = Math.abs(budget - obshto);
    if (budget >= obshto) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${Money.toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Money.toFixed(2)} leva more.`)
    }
}
film([9587.88,
    222,
    55.68,
])
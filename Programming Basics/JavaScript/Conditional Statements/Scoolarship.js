function scoolarship(input) {
    let dohod = Number(input.shift());
    let uspeh = Number(input.shift());
    let minZaplata = Number(input.shift());
    let pravoNaSoc = 0
    let pravoZaUspeh = 0
    if (dohod < minZaplata && uspeh > 4.50) {
        pravoNaSoc = minZaplata * 0.35;
    } 
    if (uspeh >= 5.5) {
        pravoZaUspeh = uspeh * 25
    }
    if (pravoNaSoc > pravoZaUspeh) {
        console.log(`You get a Social scholarship ${Math.floor(pravoNaSoc)} BGN`)
    } else if (pravoZaUspeh > pravoNaSoc) {
        console.log(`You get a scholarship for excellent results ${Math.floor(pravoZaUspeh)} BGN`)
    } else
        console.log("You cannot get a scholarship!")
}
scoolarship([300.00,
    5.65,
    420.00     
])
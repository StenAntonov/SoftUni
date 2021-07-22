function WorldSwimmingRecord(input) {
    let recordTime = Number(input.shift());
    let recordMetres = Number(input.shift());
    let timeInSecForMeter = Number(input.shift());
    let IvanchoTime = recordMetres * timeInSecForMeter
    let syprotivlenie = (Math.floor(recordMetres / 15)) * 12.5
    let IvanchoTimeWithSyprotiva = IvanchoTime + syprotivlenie
    let razlika =IvanchoTimeWithSyprotiva - recordTime
    if (IvanchoTimeWithSyprotiva < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${IvanchoTimeWithSyprotiva.toFixed(2)} seconds.`)
    }else {
        console.log(`No, he failed! He was ${razlika.toFixed(2)} seconds slower.`)
    }
}
WorldSwimmingRecord([55555.67,
    3017,
    5.03,
    ])
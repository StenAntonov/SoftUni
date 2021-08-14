function Pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let totalSteps = Math.ceil(base / 2);
    let currentStep = 1;

    for (currentStep = 1; currentStep <= totalSteps; currentStep++) {
        let area = base * base;
        let material1 = base * 4 - 4;
        let material2 = area - material1;
        if (currentStep === totalSteps) {
            gold += base * base * increment;
        } else if (currentStep % 5 === 0) {
            lapisLazuli += material1 * increment;
            stone += material2 * increment;
        } else {
            marble += material1 * increment;
            stone += material2 * increment;
        }
        base -= 2
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalSteps * increment)}`);

}
Pyramid(11, 1)
function solve(input) {
    let {
        model,
        power,
        color,
        carriage,
        wheelsize
    } = input;

    function getEngine(power) {
        let engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ].sort((a, b) => a.power - b.power);
        return engines.find(el => el.power >= power);
    }
    
    function getCarriage(carriage, color){
        return {
            type: carriage,
            color
        };
    }

    function getWheels(wheelsize) {
        let wheel = Math.floor(wheelsize) % 2 == 0 ? Math.floor(wheelsize) - 1 : Math.floor(wheelsize);
        return Array(4).fill(wheel, 0 , 4);
    }

    return {
        model: model,
        engine: getEngine(power),
        carriage: getCarriage(carriage, color),
        weheels: getWheels(wheelsize)
    };
}
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));
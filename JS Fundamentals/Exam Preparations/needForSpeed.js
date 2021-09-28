function solve(input){
    let carCount = Number(input.shift());
    let cars = {};
    for ( let i = 0 ; i < carCount ; i++ ){
        let [car, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        if(!cars.hasOwnProperty(car)){
            cars[car] = {'mileage': mileage, 'fuel': fuel};
        }
    }
    let line = input.shift();
    while(line !== 'Stop'){
        if(line.includes('Drive')){
            [action, car, distance, fuel] = line.split(' : ');
            distance = Number(distance);
            fuel = Number(fuel);
            if(cars[car].fuel < fuel){
                console.log(`Not enough fuel to make that ride`);
            }else{
                cars[car].mileage += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
            }
            if(cars[car].mileage >= 100000){
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
        }else if(line.includes('Refuel')){
            let [action, car, fuel] = line.split(' : ');
            fuel = Number(fuel);
            if(cars[car].fuel + fuel > 75){
                fuel = 75 - cars[car].fuel;
                cars[car].fuel = 75;
            }else{
                cars[car].fuel += fuel;
            }
            console.log(`${car} refueled with ${fuel} liters`);
        }else if(line.includes('Revert')){
            let [action, car, distance] = line.split(' : ');
            distance = Number(distance);
            cars[car].mileage -= distance;
            if(cars[car].mileage < 10000){
                cars[car].mileage = 10000;
            }else{
                console.log(`${car} mileage decreased by ${distance} kilometers`);
            }
        }
        line = input.shift();
    }
    let sorted = Object.keys(cars).sort((a, b) => cars[b].mileage - cars[a].mileage || a.localeCompare(b));
    sorted.forEach( x => console.log(`${x} -> Mileage: ${cars[x].mileage} kms, Fuel in the tank: ${cars[x].fuel} lt.`))
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  );
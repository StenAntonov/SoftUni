function solve(input) {
    let cars = {};

    for (let line of input) {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);

        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = {};
        }

        if (!cars[brand].hasOwnProperty(model)) {
            cars[brand][model] = quantity;
        } else {
            cars[brand][model] += quantity;
        }


    }

    Object.entries(cars).forEach(brand => {
        let quantity = Object.values(brand[1]);
        let models = Object.keys(brand[1]);
        console.log(brand[0]);
        for (let i = 0; i < models.length; i++) {
            console.log(`###${models[i]} -> ${quantity[i]}`);
        }
    });


};
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);
function solve(arr) {
    let juices = {};
    let bottles = {};
    for (let line of arr) {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);
        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = quantity;
            if (juices[juice] > 1000) {
                let bottle = Math.trunc(juices[juice] / 1000);
                if (!bottles.hasOwnProperty(juice)) {
                    bottles[juice] = bottle;
                    juices[juice] -= bottle * 1000;
                } else {
                    bottles[juice] += bottle;
                    juices[juice] -= bottle * 1000;
                }
            }
        } else {
            juices[juice] += quantity;
            let bottle = Math.trunc(juices[juice] / 1000);
            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = bottle;
                juices[juice] -= bottle * 1000;
            } else {
                bottles[juice] += bottle;
                juices[juice] -= bottle * 1000;
            }
        }
    }

    Object.keys(bottles).forEach(juiceType => console.log(`${juiceType} => ${bottles[juiceType]}`));
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

);
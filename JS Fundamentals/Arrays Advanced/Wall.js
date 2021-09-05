function buildAWall(arr) {


    let heigth = arr.map(Number).filter(x => x < 30);
    let finalCost = 0;
    let wall = [];
    let crews = heigth.length;
    while (crews != 0) {

        let concretePerDay = 0;
        for (let i = 0; i < heigth.length; i++) {
            if (heigth[i] != 30) {
                heigth[i]++
                concretePerDay += 195;
                if (heigth[i] == 30) {
                    crews--
                }
            }
        }
        if (concretePerDay != 0) {
            finalCost += concretePerDay;
            wall.push(concretePerDay);
        }
    }
    console.log(wall.join(', '));
    console.log(`${finalCost * 1900} pesos`);

}

buildAWall([17, 22, 17, 19, 17]);
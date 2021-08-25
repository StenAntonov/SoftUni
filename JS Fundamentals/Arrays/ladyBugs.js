function ladyBugs(arr) {
    let fieldSize = arr.shift();
    let field = [];
    let bugs = arr.shift().split(' ').map(Number);

    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
    }
    for (i = 0; i < bugs.length; i++) {
        if (bugs[i] >= 0 && bugs[i] < fieldSize)
            field[bugs[i]] = 1;
    }
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(' ');
        let bugIndex = Number(element[0]);
        let direction = String(element[1]);
        let flyLength = Number(element[2]);
        if (field[bugIndex] === 1) {
            field[bugIndex] = 0;
        }
        if (direction === 'right') {
            if (field[(bugIndex + flyLength)] === 1) {
                if (field[(bugIndex + flyLength)] < fieldSize) {
                    for (let k = field[(bugIndex + flyLength)]; k < fieldSize; k ++) {
                        if (field[(bugIndex + flyLength)] === 0) {
                            field[(bugIndex + flyLength)] = 1;
                        }
                    }
                }
            }
        } else if (direction === 'right' && field[(bugIndex + flyLength)] === 0 && field[(bugIndex + flyLength)] < fieldSize) {
            field[(bugIndex + flyLength)] = 1;
        }
        if (direction === 'left' && field[(bugIndex - flyLength)] === 1 && field[(bugIndex - flyLength)] >= 0) {
            for (let k = field[(bugIndex - flyLength)]; k >= 0; k --) {
                if (field[(bugIndex - flyLength)] === 0) {
                    field[(bugIndex - flyLength)] = 1;
                }
            }
        } else if (direction === 'left' && field[(bugIndex - flyLength)] === 0 && field[(bugIndex - flyLength)] >= 0) {
            field[(bugIndex - flyLength)] = 1;
        }

    }
    console.log(field.join(' '));
}
ladyBugs([5, '3',
    '3 left 2',
    '1 left -2']

);
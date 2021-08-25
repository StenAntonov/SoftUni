function equal(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    let current = 0;
    let counter = 0;
    let forLeftBorder = 0;
    let forRigthBorder = 0;

    for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        counter = i;
        forLeftBorder = i - 1;
        forRigthBorder = i + 1;

        if ((forLeftBorder >= 0 && forLeftBorder < i) && (forRigthBorder <= arr.length - 1 && forRigthBorder > i)) {
            for (let j = 0; j < i; j++) {
                sumLeft += arr[j];
            }
            for (let k = i + 1; k <= arr.length - 1; k++) {
                sumRight += arr[k];
            }
        } if (forLeftBorder == -1) {
            sumLeft = 0;
        } else if (forRigthBorder == arr.length) {
            sumRight = 0;
        }
        if ((sumLeft == sumRight) && (sumRight!= 0)) {
            console.log(current);
            break;
        } else if (sumLeft == sumRight == 0) {
            console.log('0');

        } else {
            console.log(`no`);
        }
    }
}
equal([1, 2, 3, 3])
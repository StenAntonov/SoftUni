function solve(input) {
    let result1 = [];
    let result2 = [];
    let present = 0;
    let col = 0;
    let presentCOl = 0;

    for (let i = 0; i < input.length; i++) {
        present = input[i].reduce((a, b) => a + b);
        result1.push(present);
    }

    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < input.length; j++) {
            present = input[j][col];
            presentCOl += present;
        }
        result2.push(presentCOl);

        col++;
        presentCOl = 0;

    }
    return result1.concat(result2).every((el, i, arr) => el === arr[0]);

}
console.log(solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]


));
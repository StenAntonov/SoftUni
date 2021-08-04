function solve(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);
    for (let i = floor; i > 0; i--) {
        let result = "";
        for(let j = 0; j < room; j++) {
            if(i === floor) {
                result += "L";
            }else if(i % 2 != 0) {
                result += "A";
            }else {
                result += "O";
            }
            result += i + "" + j + " ";
        }
        console.log(result);
    }
}
solve([6,4])
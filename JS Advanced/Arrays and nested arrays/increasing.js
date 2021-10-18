function solve(input) {

    let biggest = 0;

   return input.reduce(function (result, x) {
        if (biggest <= x) {
            biggest = x;
            result.push(biggest);
        }
        return result;
    }, []);
}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]

));
function solve(arr, type){
    const map = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };
    return arr.sort(map[type]);
};
console.log(solve([4, 7, 2, 13, 1, 24], 'desc'));
console.log(solve([4, 7, 2, 13, 1, 24], 'asc'));
    
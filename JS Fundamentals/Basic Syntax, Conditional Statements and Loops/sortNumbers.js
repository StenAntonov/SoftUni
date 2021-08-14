function solve(one, two, three){
    let arr = [one, two, three];
    arr.sort((a, b) => b - a);
    arr.forEach(x => console.log(x));
}
solve(2,
    1,
    3,
    )
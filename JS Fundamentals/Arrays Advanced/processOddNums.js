function process(arr) {
 console.log(arr.filter((v, i) => (i % 2) == 1).map(x => x * 2).reverse().join(' '));
}
process([10, 15, 20, 25, 25])
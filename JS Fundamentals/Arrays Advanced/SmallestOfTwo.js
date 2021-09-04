function smallestOfTwo(input) {
    let smallest = input.sort((a, b) => {return a - b;}).slice(0,2);
    return smallest.join(' ');
    
}
console.log(smallestOfTwo([30, 15, 50, 5]));
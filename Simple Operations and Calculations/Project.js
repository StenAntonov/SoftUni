function project(input) {
    let name = input.shift();
    let  number = Number(input.shift());
    let time = number * 3
    console.log("The architect " + name + " will need " + time + " hours to complete " + number + " project/s." );
}
project(["Pesho",10])
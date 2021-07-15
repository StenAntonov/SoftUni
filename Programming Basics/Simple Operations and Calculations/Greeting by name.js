function Greetings(input) {
    let name = input.shift();
    let Greetings = "Hello, " + name;
    console.log(Greetings + "!");
}
Greetings(['Petar']);
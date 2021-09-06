function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;

        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const catNames of input) {
        let [catName, catAge] = catNames.split(' ');
        let cat = new Cat(catName, catAge);
        cat.meow();
    }

}
cats(['Mellow 2', 'Tom 5']);
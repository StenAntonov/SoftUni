function solve(type, model, parts, fuel){
    class Vehicle{
        constructor(type, model, parts, fuel){
            this.type = type,
            this.model = model,
            this.parts = parts,
            this.fuel = fuel
        }
        drive(num) {
            console.log(fuel -= 10);
            
        }
    }
    let car = new Vehicle(type, model, parts, fuel);
    console.log(car)
    
}
solve(['car, bmw, { engine: 6, power: 100 }, 60'])
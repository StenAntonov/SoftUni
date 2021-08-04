function solve(input) {
    let batchCount = Number(input.shift());
    for(let i = 1; i <= batchCount; i++) {
        let flour = false;
        let eggs = false;
        let sugar = false;
        let Bake = false;
        while(!flour || !eggs || !sugar || !Bake) {
            let product = input.shift();
            switch(product) {
                case "flour" : flour = true; break;
                case "eggs" : eggs = true; break;
                case "sugar" : sugar = true; break;
                case "Bake!" : {
                    if(flour == true && eggs == true && sugar == true) {
                        Bake = true;
                        console.log(`Baking batch number ${i}...`)
                    }else {
                        console.log(`The batter should contain flour, eggs and sugar!`)
                    }
                }
                
            }
        }
        
    }

}
solve([ '3',
'flour',
'eggs',
'jam',
'Bake!',
'sugar',
'Bake!',
'flour',
'eggs',
'milk',
'almonds',
'sugar',
'Bake!',
'flour',
'eggs',
'sugar',
'Bake!' ]
)
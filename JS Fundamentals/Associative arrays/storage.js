function solve(input){
    let storage = new Map();
    
    for (let line of input) {
        let [product, qty] = line.split(' ');
        qty = Number(qty);
        if(storage.has(product)) {
            let existing = storage.get(product);
            storage.set(product, existing + qty);
        }else{
            storage.set(product, qty);
        }
    }
    
    for (const line of storage) {
        console.log(`${line[0]} -> ${line[1]}`)
    }

    
    
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)
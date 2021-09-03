function list(arr) {
    let ordered = arr.sort();
    for( let i = 0 ; i < ordered.length ; i++ ) {
        console.log(`${i+1}.${ordered[i]}`);
        
    }
}
list(["Potatoes", "Tomatoes", "Onions", "Apples"]);
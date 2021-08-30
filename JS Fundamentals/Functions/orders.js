function orders(product, quantity) {
    let price = (x, y) => x * y;
    switch (product) {
        case 'coffee':
            product = 1.50; break;
        case 'water':
            product = 1.00; break;
        case 'coke':
            product = 1.40; break;
        case 'snacks':
            product = 2.00; break;
    }
    console.log(price(product, quantity).toFixed(2));
    
}
orders('coke', 5)

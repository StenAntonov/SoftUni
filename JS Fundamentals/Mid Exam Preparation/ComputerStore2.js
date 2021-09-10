function computerStore(input) {
    let price = 0;
    let tax = 0;
    let command = "";
    

    for (const command of input) {
        if (command == 'special' || command == 'regular') {
            break;
        }
        let currentPrice = Number(command);
        if (currentPrice < 0) {
            console.log(`Invalid price!`);
            continue;
        } else {
            price += currentPrice;
        }

    }

    tax = price * 0.20;
    let total = price + tax;
    if (command == 'special') {
        total *= 0.9;
    }
    if (total == 0) {
        console.log("Invalid order!");
    }
    else {
        console.log(`Congratulations you've just bought a new computer!
            Price without taxes: ${price.toFixed(2)}$
            Taxes: ${tax.toFixed(2)}$
            -----------
            Total price: ${total.toFixed(2)}$`);
    }
}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ]
        
    
    )
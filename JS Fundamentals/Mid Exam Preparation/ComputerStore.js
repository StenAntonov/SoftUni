function computerStore(input) {
    let price = 0;
    let tax = 0;
    let command = input.shift();

    while (command != 'special' && command != 'regular'){
        let currentPrice = Number(command);
        if(currentPrice < 0){
            console.log(`Invalid price!`);
            command = input.shift();
        }else{
            price += currentPrice;
            command = input.shift();
        }

    }
    tax = price * 0.20;
    let total = price + tax;
    if(command == 'special'){
        total *= 0.9;
    }
    if(total == 0){
        console.log("Invalid order!");
    }
    else{
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${price.toFixed(2)}$
        Taxes: ${tax.toFixed(2)}$
        -----------
        Total price: ${total.toFixed(2)}$`); 
    }
}
computerStore([
    'regular'
    ]
    
    )
function skiTrip(input) {
    let days = Number(input.shift());
    let roomType = input.shift();
    let feedback = input.shift();
    let price = 0;
    switch ( roomType ) {
        case "room for one person":  price = (days - 1) * 18;break;
        case "apartment": 
        if (days < 10) {
            price = ((days - 1) * 25) * 0.7;break;
        } else if (days >= 10 && days <= 15) {
            price = ((days - 1) * 25) * 0.65;break;
        } else if (days > 15) {
            price = ((days - 1) * 25) * 0.5;break;
        }
        case "president apartment": 
        if (days < 10) {
            price = ((days - 1) * 35) * 0.9;break;
        } else if (days >= 10 && days <= 15) {
            price = ((days - 1) * 35) * 0.85;break;
        } else if (days > 15) {
            price = ((days - 1) * 35) * 0.8;break;
        }
    }
    if (feedback === "positive") {
        price = price * 1.25;
    } else if (feedback === "negative") {
        price = price * 0.9;
    }
    console.log(price.toFixed(2));
}
skiTrip([12,
    "room for one person",
    "positive"
    
    ])
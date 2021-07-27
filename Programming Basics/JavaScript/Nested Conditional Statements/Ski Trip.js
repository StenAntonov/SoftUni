function skiTrip(input) {
    let days = Number(input.shift());
    let roomType = input.shift();
    let feedback = input.shift();
    let price = 0;
    if (roomType === "room for one person") {
        price = (days - 1) * 18;
    } else if (roomType === "apartment") {
        if (days < 10) {
            price = ((days - 1) * 25) * 0.7;
        } else if (days >= 10 && days <= 15) {
            price = ((days - 1) * 25) * 0.65;
        } else if (days > 15) {
            price = ((days - 1) * 25) * 0.5;
        }
    } else if (roomType === "president apartment") {
        if (days < 10) {
            price = ((days - 1) * 35) * 0.9;
        } else if (days >= 10 && days <= 15) {
            price = ((days - 1) * 35) * 0.85;
        } else if (days > 15) {
            price = ((days - 1) * 35) * 0.8;
        }
    } if (feedback === "positive") {
        price = price * 1.25;
    } else if (feedback === "negative") {
        price = price * 0.9;
    }
    console.log(price.toFixed(2));
}
skiTrip([2,
    "apartment",
    "positive"


])
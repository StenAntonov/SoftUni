function hotelRoom(input) {
    let month = input.shift();
    let days = Number(input.shift());
    let appPrice = 0;
    let studioPrice = 0;
    switch (month) {
        case "May":
        case "October":
            if (days > 7 && days < 15) {
                studioPrice = (days * 50) * 0.95;
                appPrice = days * 65;
            } else if (days > 14) {
                studioPrice = (days * 50) * 0.7;
                appPrice = (days * 65) * 0.9;
            } else {
                studioPrice = (days * 50);
                appPrice = days * 65;
            };break
        case "June":
        case "September":
            if (days > 14) {
                studioPrice = (days * 75.20) * 0.8;
                appPrice = (days * 68.70) * 0.9;
            } else {
                studioPrice = (days * 75.20);
                appPrice = (days * 68.70);
            };break;
        case "July":
        case "August":
            if (days > 14) {
                appPrice = (days * 77) * 0.9;
                studioPrice = days * 76;
            } else {
                studioPrice = days * 76;
                appPrice = days * 77;
            };break;
    }
    console.log(`Apartment: ${appPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}
hotelRoom(["August", 20])
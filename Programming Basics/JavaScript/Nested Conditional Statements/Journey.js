function Journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let destination = 0;
    let price = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            price = budget * 0.3;
        } else if (season === "winter") {
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            price = budget * 0.4;
        } else if (season === "winter") {
            price = budget * 0.8;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        price = budget * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    if (destination != "Europe" && season === "summer") {
        console.log(`Camp - ${price.toFixed(2)}`);
    } else {
        console.log(`Hotel - ${price.toFixed(2)}`);
    }
}
Journey([75, "winter"])